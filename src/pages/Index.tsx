import { UrlShortener } from "@/components/UrlShortener";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container px-4 py-16 mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            URL Shortener
          </h1>
          <p className="text-lg text-foreground/80">
            Transform your long URLs into short, shareable links
          </p>
        </div>
        <UrlShortener />
      </div>
    </div>
  );
};

export default Index;