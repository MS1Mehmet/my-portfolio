import React, { useState, useEffect } from 'react';
import LoadingBar from '@/components/animations/Loadingbar';
import styles from '@/styles/FakeTerminal.module.css';

const statusMessages = [
  "looking_for_data",
  "|> Loading_data",
  "<> Initializing_portfolio ",
  "<> Hero_About_Projects",
  "$ACCES-DENIED$"
];

const FakeTerminal = () => {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedMessages((prev) => {
        if (prev.length >= statusMessages.length) {
          clearInterval(interval);
          return prev;
        }
        setActiveIndex(prev.length);
        return [...prev, statusMessages[prev.length]];
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.terminal}>
        <pre className={styles.output}>
          {displayedMessages.map((msg, i) => {
            const [textPart] = msg.split('...');
            return (
              <div key={i}>
                {textPart}
                <span className={i === activeIndex ? styles.pulsingDots : ''}>
                  ...
                </span>
              </div>
            );
          })}
        </pre>

        {/* Hier muss der Ladebalken in den Wrapper */}
        <div className={styles.loadingBarWrapper}>
          <LoadingBar />
        </div>
      </div>
    </div>
  );
};

export default FakeTerminal;
