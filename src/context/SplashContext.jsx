import { createContext, useCallback, useContext, useMemo, useState } from "react";

const SplashContext = createContext({
  splashComplete: true,
  completeSplash: () => {},
});

export function SplashProvider({ children }) {
  const [splashComplete, setSplashComplete] = useState(false);
  const completeSplash = useCallback(() => {
    setSplashComplete(true);
  }, []);

  const value = useMemo(
    () => ({ splashComplete, completeSplash }),
    [splashComplete, completeSplash]
  );

  return <SplashContext.Provider value={value}>{children}</SplashContext.Provider>;
}

export function useSplash() {
  return useContext(SplashContext);
}
