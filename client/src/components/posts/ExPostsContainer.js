import React from "react";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import ExPost from "./ExPost";
import "./posts.css";

const ExPostsContainer = ({ posts }) => {
  return !posts ? (
    <LoadingCircle />
  ) : (
    <div className="cards-container">
      <div className="cards">
        {posts.map((post) => (
          <ExPost key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ExPostsContainer;
