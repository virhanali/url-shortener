import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Redirect = () => {
  const { shortId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const redirectToOriginalUrl = async () => {
      try {
        const originalUrl = localStorage.getItem(`url_${shortId}`);
        
        if (!originalUrl) {
          throw new Error("URL not found");
        }

        const isCloudflareUrl = originalUrl.includes('shortener.virhanalli.com');
        
        let urlToRedirect;
        if (isCloudflareUrl) {
          urlToRedirect = originalUrl;
        } else {
          urlToRedirect = originalUrl.startsWith('http') 
            ? originalUrl 
            : `http://${originalUrl}`;
        }

        window.location.href = urlToRedirect;
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not find the original URL",
        });
        navigate("/");
      }
    };
    redirectToOriginalUrl();
  }, [shortId, navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse">Redirecting...</div>
    </div>
  );
};

export default Redirect;