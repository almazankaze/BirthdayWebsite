import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentPostId, setCurrentPostId] = useState(null);

  return (
    <AppContext.Provider value={{ currentPostId, setCurrentPostId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
