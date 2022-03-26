import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExPost } from "../../actions/posts";

import "./form.css";

const ExPostForm = ({ birthdayId }) => {
  const [showError, setShowError] = useState(false);
  const [postData, setPostData] = useState({
    message: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postData.message.trim() === "") setShowError(true);
    else {
      dispatch(addExPost(birthdayId, { ...postData }));
      setShowError(false);
      clear();
    }
  };
  const clear = () => {
    setPostData({
      message: "",
    });
  };
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
