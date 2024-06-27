'use client'
import { createContext, useState, useContext } from 'react';

const SavedDataContext = createContext();

export const SavedDataProvider = ({ children }) => {
  const [savedData, setSavedData] = useState([]);

  const addSavedData = (newData) => {
    setSavedData((prevData) => [...prevData, newData]);
  };

  return (
    <SavedDataContext.Provider value={{ savedData, addSavedData }}>
      {children}
    </SavedDataContext.Provider>
  );
};

export const useSavedData = () => {
  return useContext(SavedDataContext);
};
