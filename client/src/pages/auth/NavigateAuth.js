import { Navigate } from "react-router-dom";

const NavigateAuth = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return user ? <Navigate to="/" /> : children;
};

export default NavigateAuth;
