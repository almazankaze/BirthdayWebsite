import React from "react";
import Post from "./Post";
import "./posts.css";

const PostsContainer = () => {
  return (
    <div className="cards-container">
      <div className="cards">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostsContainer;
