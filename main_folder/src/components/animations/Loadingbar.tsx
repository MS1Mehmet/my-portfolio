import React, { useState, useEffect } from 'react';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress >= 99) {
          clearInterval(interval); // Safe: wird nur einmal aufgerufen
          return 99;
        }
        return oldProgress + 3;
      });
    }, 99);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      border: '3px solid #222',
      padding: 15,
      display: 'block',
      maxWidth: 350,
      width: '100%',
      boxSizing: 'border-box',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        <div style={{
          width: '100%',
          height: 20,
          backgroundColor: '#50547c',
          borderRadius: 0,
          overflow: 'hidden',
          border: '2px solid #3bb8d7',
          boxSizing: 'border-box',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#3bb8d7',
            transition: 'width 0.2s ease-in-out',
          }} />
        </div>
        <div style={{
          color: '#3bb8d7',
          fontWeight: 'bold',
          minWidth: 40,
          textAlign: 'right',
          whiteSpace: 'nowrap',
        }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
