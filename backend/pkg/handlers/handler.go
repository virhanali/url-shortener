package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-redis/redis/v8"
	"github.com/virhanali/url-shortener/backend/internal/shortener"
)

type ShortenRequest struct {
	URL string `json:"url"`
}

type ShortenResponse struct {
	ShortenedURL string `json:"shortened_url"`
}

func ShortenURLHandler(rdb *redis.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req ShortenRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid request", http.StatusBadRequest)
			return
		}

		shortened := shortener.ShortenURL(req.URL)

		err := rdb.SetEX(context.Background(), shortened, req.URL, 5*time.Second).Err()
		if err != nil {
			log.Printf("Failed to save to Redis: %v", err)
			http.Error(w, "Failed to save URL", http.StatusInternalServerError)
			return
		}

		json.NewEncoder(w).Encode(ShortenResponse{ShortenedURL: fmt.Sprintf("http://localhost:8080/%s", shortened)})
	}
}

func RedirectURLHandler(rdb *redis.Client) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		shortenedURL := r.URL.Path[1:]

		originalURL, err := rdb.Get(context.Background(), shortenedURL).Result()
		if err == redis.Nil {
			http.Error(w, "URL not found", http.StatusNotFound)
			return
		} else if err != nil {
			log.Printf("Failed to retrieve URL from Redis: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		http.Redirect(w, r, originalURL, http.StatusFound)
	}
}
