'use client';
import { createContext, useContext, useState } from 'react';

type IntroContextType = {
  introDone: boolean;
  finishIntro: () => void;
};

const IntroContext = createContext<IntroContextType>({
  introDone: false,
  finishIntro: () => {},
});

export const useIntro = () => useContext(IntroContext);

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = () => setIntroDone(true);

  return (
    <IntroContext.Provider value={{ introDone, finishIntro }}>
      {children}
    </IntroContext.Provider>
  );
};

export default IntroContext;