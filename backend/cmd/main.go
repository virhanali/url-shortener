package main

import (
	"log"
	"net/http"

	"github.com/go-redis/redis/v8"
	"github.com/rs/cors"
	"github.com/virhanali/url-shortener/backend/pkg/handlers"
)

func main() {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "localhost:6379", 
		Password: "",              
		DB:       0,                
	})

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"}, 
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
	})

	mux := http.NewServeMux()

	// Register your handlers
	mux.HandleFunc("/shorten", handlers.ShortenURLHandler(rdb))
	mux.HandleFunc("/", handlers.RedirectURLHandler(rdb))
	handler := c.Handler(mux)

	log.Println("Server started at :8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
