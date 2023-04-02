import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/user";

const NavigateAuth = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? <Navigate to="/" /> : children;
};

export default NavigateAuth;
