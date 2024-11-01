import React, { createContext, useContext, useState, useCallback } from 'react';

const BlenderContext = createContext();

export const BlenderProvider = ({ children }) => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    const toggleNumber = useCallback((number) => {
        setSelectedNumbers((prevSelected) => 
          prevSelected.includes(number) 
            ? prevSelected.filter((num) => num !== number)  // Удаление числа, если оно уже выбрано
            : [...prevSelected, number]                     // Добавление числа, если оно не выбрано
        );
      }, []);
    return (
        <BlenderContext.Provider value={{ selectedNumbers, toggleNumber }}>
            {children}
        </BlenderContext.Provider>
    );
};

export const useBlender = () => useContext(BlenderContext);