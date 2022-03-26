import React from "react";
import { NavLink } from "react-router-dom";

const HomeBirthday = ({ birthday, image }) => {
  return (
    <div className="home-card-container">
      <div className="home-card">
        <img src={image} alt="home-card" />
        <h2 className="home-card-name">{birthday.birthdayName}</h2>

        <NavLink to={`/birthday/${birthday._id}`}>
          <button className="btn">Try Out</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeBirthday;
