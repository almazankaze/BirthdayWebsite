import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../context";
import { deletePost } from "../../actions/posts";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DefaultImg from "../../images/default-birthday.jpg";

const Post = ({ post, birthdayId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const { setCurrentPostId } = useGlobalContext();

  const scrollToTop = (id) => {
    window.scrollTo(0, 0);
    setCurrentPostId(id);
  };

  return (
    <div className="card">
      <div className="card-content">
        <img src={post.selectedFile || DefaultImg} alt="card pic" />
        <div className="card-text">
          <h2>{`From ${post.posterName}`}</h2>
          <p>{post.message}</p>
        </div>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className="card-footer">
            <div className="card-footer-content">
              <p>{moment(post.createdAt).fromNow()}</p>

              <div className="card-footer-btns">
                <IconButton
                  className="card-icon-btn"
                  aria-label="edit"
                  onClick={() => scrollToTop(post._id)}
                >
                  <EditIcon sx={{ fontSize: 32, color: "blue" }} />
                </IconButton>

                <IconButton
                  className="card-icon-btn"
                  aria-label="delete"
                  onClick={() => dispatch(deletePost(birthdayId, post._id))}
                >
                  <DeleteIcon sx={{ fontSize: 32, color: "red" }} />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
