import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getExBirthdays } from "./actions/birthdays";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExBirthdays());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
