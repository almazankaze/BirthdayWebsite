import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBirthday } from "../../actions/birthdays";
import "./form.css";

const CreateBirthday = () => {
  const [showError, setShowError] = useState(false);
  const [birthdayData, setbirthdayData] = useState({
    birthdayName: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (birthdayData.birthdayName.trim() === "") setShowError(true);
    else {
      dispatch(createBirthday(birthdayData, { ...birthdayData }));
      setShowError(false);
      clear();
    }
  };
  const clear = () => {
    setbirthdayData({
      birthdayName: "",
    });
  };
  return (
    <div className="form-container">
      <h1>Create Birthday Wish</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name of person"
            className="input-box"
            value={birthdayData.birthdayName}
            onChange={(e) =>
              setbirthdayData({ ...birthdayData, birthdayName: e.target.value })
            }
          />
          <span className={showError ? "input-error" : "hide-input-error"}>
            Please enter the name of the person
          </span>
        </div>

        <button className="btn form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBirthday;
