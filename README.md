# URL Shortener with Go, React, and Redis

## Project Description

This project is a simple **URL Shortener** built using **Golang** as the backend, **React** as the frontend, and **Redis** as a storage system for shortened URLs. The purpose of the project is to allow users to generate shortened URLs from a full URL, store them temporarily, and provide redirection functionality to the original URL.

The backend is responsible for:
- **Generating shortened URLs** from long URLs.
- **Storing shortened URLs** and the original URLs in **Redis** with an expiration time of 60 seconds.
- **Redirecting users** from the shortened URL back to the original URL.

The frontend is built with **React** and provides a simple interface where users can input URLs and get the shortened version in return.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Automatic Expiration**: URLs stored in Redis are automatically deleted after 60 seconds.
- **Redirection**: Shortened URLs will redirect users to the original full URL.
- **Frontend-Backend Integration**: Full integration between React frontend and Go backend via API calls.

## Tech Stack

- **Frontend**: React
- **Backend**: Go (Golang)
- **Database**: Redis for key-value storage
- **Environment**: Nix for environment management

## Prerequisites

To run this project, ensure you have the following installed:

- **Node.js**
- **Golang**
- **Redis**
- **Nix** (optional, for environment management)

## Installation and Setup

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/username/url-shortener.git
cd url-shortener
```
### 2. Backend Setup (Golang)
Make sure Go is installed.
Navigate to the backend folder:
```bash
cd backend
go mod tidy
go run cmd/main.go
```
The Go server will start at http://localhost:8080.

### 3. Frontend Setup (React)
Navigate to the frontend folder:
```bash
cd frontend
npm install
npm start
```
This will start the React development server at http://localhost:3000.

### 4. Redis Setup
Ensure Redis is running locally on port 6379.

### 5. Access the Application
Open your browser and go to http://localhost:3000.
Enter a URL to be shortened and receive the shortened link.
The shortened URL will expire in 60 seconds and redirect users to the original URL.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.
