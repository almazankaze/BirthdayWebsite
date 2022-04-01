import React from "react";
import { NavLink } from "react-router-dom";

const HomeBirthday = ({ birthday, image }) => {
  return (
    <div className="home-card-container">
      <div className="home-card">
        <img src={image} alt="home-card" />
        <h2 className="home-card-name">{birthday.birthdayName}</h2>

        <button type="button" className="btn">
          <NavLink className="black-text" to={`/exbirthday/${birthday._id}`}>
            Check Out
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default HomeBirthday;
