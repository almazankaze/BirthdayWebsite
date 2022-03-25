import React from "react";

const HomeBirthday = ({ birthday, image }) => {
  return (
    <div className="home-card-container">
      <div className="home-card">
        <img src={image} alt="home-card" />
        <h2 className="home-card-name">{birthday.birthdayName}</h2>

        <button className="btn">Try Out</button>
      </div>
    </div>
  );
};

export default HomeBirthday;
