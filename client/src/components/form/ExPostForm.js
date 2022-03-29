import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExPost, updateExPost } from "../../actions/posts";
import { useGlobalContext } from "../../context";

import "./form.css";

const ExPostForm = ({ birthdayId }) => {
  const [showError, setShowError] = useState(false);
  const [postData, setPostData] = useState({
    message: "",
  });

  const { currentPostId, setCurrentPostId } = useGlobalContext();

  const post = useSelector((state) =>
    currentPostId
      ? state.birthday.posts.find((p) => p._id === currentPostId)
      : null
  );

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postData.message.trim() === "") setShowError(true);
    else {
      if (currentPostId) {
        dispatch(updateExPost(birthdayId, currentPostId, postData));
      } else {
        dispatch(
          addExPost(birthdayId, { ...postData, posterName: user?.result?.name })
        );
      }

      setShowError(false);
      clear();
    }
  };
  const clear = () => {
    setCurrentPostId(null);
    setPostData({
      message: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <div className="form-container">
        <h2>Please sign in to start posting.</h2>
      </div>
    );
  }
  return (
    <div className="form-container">
      <h1>{currentPostId ? "Edit this post" : "Create a post"}</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Message"
            className="input-box"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <span className={showError ? "input-error" : "hide-input-error"}>
            Please enter a message to proceed
          </span>
        </div>

        <button className="btn form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExPostForm;
