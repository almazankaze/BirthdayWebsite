import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentPostId, setCurrentPostId] = useState(null);
  const [birthdayId, setBirthdayId] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPostId,
        setCurrentPostId,
        birthdayId,
        setBirthdayId,
        copySuccess,
        copyToClipBoard,
        setCopySuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
