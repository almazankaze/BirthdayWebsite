import React from "react";
import Form from "./components/form/Form";
import NavBar from "./components/navbar/NavBar";
import PostsContainer from "./components/posts/PostsContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Form />
      <PostsContainer />
    </div>
  );
};

export default App;
