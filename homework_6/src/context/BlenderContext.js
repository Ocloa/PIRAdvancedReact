import React, { createContext, useContext, useState, useCallback } from 'react';

const BlenderContext = createContext();

export const BlenderProvider = ({ children }) => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    const toggleNumber = useCallback((number) => {
        setSelectedNumbers((prevSelected) => 
          prevSelected.includes(number) 
            ? prevSelected.filter((num) => num !== number)
            : [...prevSelected, number]
        );
      }, []);
    return (
        <BlenderContext.Provider value={{ selectedNumbers, toggleNumber }}>
            {children}
        </BlenderContext.Provider>
    );
};

export const useBlender = () => useContext(BlenderContext);