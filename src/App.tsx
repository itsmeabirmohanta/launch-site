import React, { useState, useEffect } from 'react';
import { AppContainer } from './styles/StyledComponents';
import { MainContent } from './components/MainContent';
import { LaunchSequence } from './components/LaunchSequence';
import { READY_TRANSLATIONS, TARGET_URL } from './constants/translations';

const App: React.FC = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showReadyText, setShowReadyText] = useState(false);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle the launch button click
  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setShowReadyText(true);
    }, 1000);
  };

  // Progress bar effect with smooth language rotation
  useEffect(() => {
    if (isLaunching && showReadyText) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 0.5;
          if (next >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              window.location.href = TARGET_URL;
            }, 500);
            return 100;
          }
          return next;
        });

        // Smooth language transitions
        const nextIndex = Math.floor(progress / 8) % READY_TRANSLATIONS.length;
        if (nextIndex !== currentLangIndex && !isTransitioning) {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentLangIndex(nextIndex);
            setIsTransitioning(false);
          }, 300);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isLaunching, showReadyText, progress, currentLangIndex, isTransitioning]);

  // Add meta tag for proper mobile viewport
  useEffect(() => {
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);

  return (
    <AppContainer>
      {!isLaunching ? (
        <MainContent onLaunch={handleLaunch} />
      ) : (
        showReadyText && (
          <LaunchSequence
            currentLangIndex={currentLangIndex}
            progress={progress}
            translation={READY_TRANSLATIONS[currentLangIndex]}
          />
        )
      )}
    </AppContainer>
  );
};

export default App; 