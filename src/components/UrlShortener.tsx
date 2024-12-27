import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export const UrlShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const isValidUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUrl(url)) {
      toast({
        title: "Error",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      // Generate a short ID
      const shortId = Math.random().toString(36).substr(2, 6);
      
      // Store in localStorage
      localStorage.setItem(`url_${shortId}`, url);
      
      const shortUrl = `${window.location.origin}/${shortId}`;
      setShortUrl(shortUrl);
      
      toast({
        title: "Success!",
        description: "Your URL has been shortened",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast({
        title: "Copied!",
        description: "URL copied to clipboard",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy URL",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter your long URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="h-12 text-lg"
        />
        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-semibold"
          disabled={loading}
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </Button>
      </form>

      {shortUrl && (
        <Card className="p-4 animate-fade-in">
          <div className="flex items-center justify-between gap-4">
            <a 
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium truncate text-primary hover:underline"
            >
              {shortUrl}
            </a>
            <Button onClick={copyToClipboard} variant="outline">
              Copy
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};