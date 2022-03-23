import React from "react";
import "./birthday.css";

const Birthday = ({ birthday }) => {
  return (
    <div>
      <p>{birthday.creator}</p>
      <p>{birthday.birthdayName}</p>
      <hr></hr>
    </div>
  );
};

export default Birthday;
