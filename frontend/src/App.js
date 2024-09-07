import { useState } from 'react';
import ShortenForm from './components/ShortenForm';

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async (url) => {
    try {
      const response = await fetch('http://localhost:8080/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortenedUrl(data.shortened_url);
      setError('');
    } catch (err) {
      setError(err.message);
      setShortenedUrl('');
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <ShortenForm onSubmit={handleShorten} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {shortenedUrl && (
        <div>
          <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
        </div>
      )}
    </div>
  );
}

export default App;
