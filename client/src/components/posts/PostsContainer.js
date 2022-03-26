import React from "react";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import Post from "./Post";
import "./posts.css";

const PostsContainer = ({ posts, birthdayId }) => {
  return !posts ? (
    <LoadingCircle />
  ) : (
    <div className="cards-container">
      <div className="cards">
        {posts.map((post) => (
          <Post key={post._id} post={post} birthdayId={birthdayId} />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
