import React from "react";
import { useDispatch } from "react-redux";
import { deleteBirthday } from "../../actions/birthdays";
import { useGlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import "./birthday.css";

const Birthday = ({ birthday }) => {
  const dispatch = useDispatch();
  const { birthdayId, setBirthdayId, copyToClipBoard } = useGlobalContext();

  const handleButton = () => {
    if (birthdayId === birthday._id) {
      setBirthdayId(null);
    }
    dispatch(deleteBirthday(birthday._id));
  };

  return (
    <div className="user-birthday">
      <h2>{birthday.birthdayName}</h2>

      <div className="user-birthday-buttons">
        <button type="button" className="btn">
          <NavLink className="black-text" to={`/birthday/${birthday._id}`}>
            View
          </NavLink>
        </button>

        <button
          type="button"
          className="btn share"
          onClick={() =>
            copyToClipBoard(
              `${window.location.origin.toString()}/birthday/${birthday._id}`
            )
          }
        >
          Share
        </button>

        <button type="button" className="btn delete" onClick={handleButton}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Birthday;
