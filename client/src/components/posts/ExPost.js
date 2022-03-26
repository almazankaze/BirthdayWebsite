import React from "react";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import hutaoImg from "../../images/hu-tao.jpg";

const ExPost = ({ post }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={hutaoImg} alt="card pic" />
        <div className="card-text">
          <h2>postName</h2>
          <p>{post.message}</p>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <div className="card-footer">
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ fontSize: 32, color: "red" }} />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon sx={{ fontSize: 32, color: "blue" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ExPost;
