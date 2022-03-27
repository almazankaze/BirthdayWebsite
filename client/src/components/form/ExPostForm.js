import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExPost } from "../../actions/posts";

import "./form.css";

const ExPostForm = ({ birthdayId }) => {
  const [showError, setShowError] = useState(false);
  const [postData, setPostData] = useState({
    message: "",
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postData.message.trim() === "") setShowError(true);
    else {
      dispatch(
        addExPost(birthdayId, { ...postData, posterName: user?.result?.name })
      );
      setShowError(false);
      clear();
    }
  };
  const clear = () => {
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
      <h1>Add message</h1>
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
