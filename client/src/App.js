import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/Errors/NotFound";
import Auth from "./pages/auth/Auth";
import NavigateAuth from "./pages/auth/NavigateAuth";
import CreateBirthday from "./pages/createBirthday/CreateBirthday";
import BirthdayPosts from "./pages/posts/BirthdayPosts";
import UserBirthdays from "./pages/userBirthdays/UserBirthdays";
import ScrollToTop from "./components/scroll/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route
              path="auth"
              element={
                <NavigateAuth>
                  <Auth />
                </NavigateAuth>
              }
            />
            <Route path="create" element={<CreateBirthday />} />
            <Route
              path="birthday/:birthday_id"
              element={<BirthdayPosts />}
            ></Route>
            <Route path="myWishes" element={<UserBirthdays />}></Route>
            <Route path="*" element={<Navigate to="/notfound" />}></Route>
            <Route path="notfound" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
