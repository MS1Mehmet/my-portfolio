'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

function CPUScan() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/CPU_scan.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status} — ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setAnimationData(data);
        setLoading(false);        // Ladezustand beenden
      })
      .catch((err) => {
        console.error('Fehler beim Laden der Animation:', err);
        setError(err.message);    // Fehlernachricht speichern
        setLoading(false);        // Ladezustand ebenfalls beenden
      });
  }, []);

  if (loading) {
    return <div>Loading animation…</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-[800px] h-auto">
      {animationData && <Lottie animationData={animationData} />}
    </div>
  );
}

export default CPUScan;
