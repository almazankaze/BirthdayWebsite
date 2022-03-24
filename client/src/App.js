import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBirthdays } from "./actions/birthdays";
import CreateBirthday from "./components/form/CreateBirthday";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBirthdays());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
