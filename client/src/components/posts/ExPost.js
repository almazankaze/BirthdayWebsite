import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../context";
import { deleteExPost } from "../../actions/posts";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DefaultImg from "../../images/default-birthday.jpg";

const ExPost = ({ post, birthdayId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const { setCurrentPostId } = useGlobalContext();

  return (
    <div className="card">
      <div className="card-content">
        <img src={post.selectedFile || DefaultImg} alt="card pic" />
        <div className="card-text">
          <h2>{`From ${post.posterName}`}</h2>
          <p>{post.message}</p>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className="card-footer">
            <IconButton
              aria-label="delete"
              onClick={() => dispatch(deleteExPost(birthdayId, post._id))}
            >
              <DeleteIcon sx={{ fontSize: 32, color: "red" }} />
            </IconButton>

            <IconButton
              aria-label="edit"
              onClick={() => setCurrentPostId(post._id)}
            >
              <EditIcon sx={{ fontSize: 32, color: "blue" }} />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExPost;
