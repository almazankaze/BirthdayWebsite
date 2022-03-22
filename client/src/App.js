import React from "react";
import Form from "./components/form/Form";
import SignUp from "./components/form/SignUp";
import NavBar from "./components/navbar/NavBar";
import PostsContainer from "./components/posts/PostsContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Form />
      <PostsContainer />
      <SignUp />
    </div>
  );
};

export default App;
