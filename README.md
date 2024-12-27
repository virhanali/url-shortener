# URL Shortener

A modern, responsive URL shortening application built with React, TypeScript, and Shadcn/UI.


<img width="928" alt="image" src="https://github.com/user-attachments/assets/e4f095cd-f06b-4695-897d-308c564ae90b" />


## Features

- 🔗 Shorten long URLs instantly
- 📱 Responsive design that works on all devices
- 🌓 Dark/Light mode support
- 📋 One-click copy to clipboard
- ⚡ Fast and lightweight
- 🔒 Client-side URL storage
- 🎨 Modern UI with smooth animations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/UI Components
- Docker

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener    
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:8001`

### Docker Deployment

1. Build the Docker image:

```bash
docker build -t url-shortener .
```

2. Run the Docker container:

```bash
docker run -d -p 8001:80 url-shortener
```

The application will be available at `http://localhost:8001`

### Docker Compose Deployment

1. Run the Docker Compose file:

```bash
docker compose up -d
```

The application will be available at `http://localhost:8001`

## Usage

1. Enter a long URL in the input field
2. Click "Shorten URL"
3. Copy the shortened URL using the "Copy" button
4. Share your shortened URL!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool
