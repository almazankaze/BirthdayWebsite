import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "../../actions/posts";
import { useGlobalContext } from "../../context";

import "./form.css";

const PostForm = ({ birthdayId }) => {
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [encodedFile, setEncodedFile] = useState("");
  const [postData, setPostData] = useState({
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState([]);

  const ref = useRef();

  const reset = () => {
    ref.current.value = "";
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files);
  };

  const encodeFileBase64 = (file) => {
    let reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        let Base64 = reader.result;
        setEncodedFile(Base64);
      };
      reader.onerror = function (e) {
        console.log("error");
      };
    }
  };

  encodeFileBase64(selectedFile[0]);

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

    setIsLoading(true);

    if (postData.message.trim() === "") setShowError(true);
    else {
      if (currentPostId) {
        dispatch(updatePost(birthdayId, currentPostId, postData));
      } else {
        dispatch(
          addPost(birthdayId, {
            ...postData,
            posterName: user?.result?.name,
            selectedFile: encodedFile,
          })
        );
      }
    }
    clear();
  };
  const clear = () => {
    setCurrentPostId(null);
    setIsLoading(false);
    setShowError(false);
    setEncodedFile("");
    setSelectedFile([]);
    reset();
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

  return isLoading ? (
    <div></div>
  ) : (
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
        <div>
          <input
            type="file"
            id="input-file"
            accept="image/*"
            ref={ref}
            onChange={onFileChange}
          />
        </div>

        <button className="btn form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
