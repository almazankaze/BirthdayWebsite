import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/Errors/NotFound";
import Auth from "./pages/auth/Auth";
import ExBirthdayPosts from "./pages/posts/ExBirthdayPosts";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/auth" element={<Auth />}></Route>
          <Route
            path="/exbirthday/:birthday_id"
            element={<ExBirthdayPosts />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
