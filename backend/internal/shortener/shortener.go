package shortener

import (
	"crypto/sha256"
	"encoding/base64"
)

func ShortenURL(originalURL string) string {
	hash := sha256.Sum256([]byte(originalURL))
	return base64.URLEncoding.EncodeToString(hash[:])[:8]
}
