import React, { createContext, useContext, useState, useCallback } from 'react';

interface BlenderContextType {
  selectedNumbers: number[];
  toggleNumber: (number: number) => void;
}

const BlenderContext = createContext<BlenderContextType | undefined>(undefined);

export const BlenderProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const toggleNumber = useCallback((number: number): void => {
    setSelectedNumbers(prevSelected =>
      prevSelected.includes(number)
        ? prevSelected.filter(num => num !== number)
        : [...prevSelected, number]
    );
  }, []);

  return (
    <BlenderContext.Provider value={{ selectedNumbers, toggleNumber }}>
      {children}
    </BlenderContext.Provider>
  );
};

export const useBlender = (): BlenderContextType => {
  const context = useContext(BlenderContext);
  if (context === undefined) {
    throw new Error('useBlender must be used within a BlenderProvider');
  }
  return context;
};