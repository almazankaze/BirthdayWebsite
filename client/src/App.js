import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/Errors/NotFound";
import Auth from "./pages/auth/Auth";
import BirthdayPosts from "./pages/posts/BirthdayPosts";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route
            path="/birthday/:birthday_id"
            element={<BirthdayPosts />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
