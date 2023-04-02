import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./actions/auth";
import {
  onAuthStateChangedListener,
  createUserDoc,
} from "./utilities/firebase";

import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/Errors/NotFound";
import Auth from "./pages/auth/Auth";
import CreateBirthday from "./pages/createBirthday/CreateBirthday";
import BirthdayPosts from "./pages/posts/BirthdayPosts";
import UserBirthdays from "./pages/userBirthdays/UserBirthdays";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDoc(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateBirthday />} />
          <Route path="/auth" element={<Auth />}></Route>
          <Route
            path="/birthday/:birthday_id"
            element={<BirthdayPosts />}
          ></Route>
          <Route path="/myWishes" element={<UserBirthdays />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
