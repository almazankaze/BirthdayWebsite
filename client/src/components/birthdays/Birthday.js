import React from "react";
import { NavLink } from "react-router-dom";
import "./birthday.css";

const Birthday = ({ birthday }) => {
  return (
    <div className="user-birthday">
      <h2>{birthday.birthdayName}</h2>

      <button type="button" className="btn">
        <NavLink className="black-text" to={`/birthday/${birthday._id}`}>
          Link
        </NavLink>
      </button>

      <button type="button" className="btn delete">
        Remove
      </button>
    </div>
  );
};

export default Birthday;
