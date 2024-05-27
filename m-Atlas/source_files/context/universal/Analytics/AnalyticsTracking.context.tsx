import React, { useState, useContext, createContext, ReactNode } from 'react';

interface AnalyticsTrackingContextProps {
  first: boolean;
  second: string;
}

const defaultContext: AnalyticsTrackingContextProps = {
  first: false,
  second: "false"
};

const AnalyticsTrackingContext = createContext<AnalyticsTrackingContextProps | null>(null);

interface AnalyticsTrackingProviderProps {
  children: ReactNode;
}

const AnalyticsTrackingProvider = ({ children }: AnalyticsTrackingProviderProps) => {
  const [first, setFirst] = useState<boolean>(defaultContext.first);
  const [second, setSecond] = useState<string>(defaultContext.second);

  return (
    <AnalyticsTrackingContext.Provider value={{ first, second }}>
      {children}
    </AnalyticsTrackingContext.Provider>
  );
};

const useAnalyticsTracking = () => {
  const analyticsTrackingContextObject = useContext(AnalyticsTrackingContext);
  if (!analyticsTrackingContextObject) {
    throw new Error('useAnalyticsTracking() called outside of a AnalyticsTrackingProvider');
  }
  return analyticsTrackingContextObject;
};

export { AnalyticsTrackingProvider, useAnalyticsTracking };
