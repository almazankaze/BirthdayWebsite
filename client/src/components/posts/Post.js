import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Post = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h2>My message</h2>
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

export default Post;
