import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentPostId, setCurrentPostId] = useState(null);
  const [birthdayId, setBirthdayId] = useState(null);

  return (
    <AppContext.Provider
      value={{ currentPostId, setCurrentPostId, birthdayId, setBirthdayId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
