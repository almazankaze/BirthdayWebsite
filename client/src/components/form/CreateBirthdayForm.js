import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useGlobalContext } from "../../context";
import { createBirthday } from "../../actions/birthdays";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import "./form.css";

const CreateBirthdayForm = () => {
  const [showInputError, setShowInputError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hideError, setHideError] = useState(true);
  const { setBirthdayId } = useGlobalContext();
  const [birthdayData, setbirthdayData] = useState({
    creator: "",
    birthdayName: "",
  });

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (birthdayData.birthdayName.trim() === "") setShowInputError(true);
    else {
      setLoading(true);
      dispatch(
        createBirthday({
          ...birthdayData,
          creator: user?.result?._id,
        })
      ).then((result) => {
        if (result) {
          setBirthdayId(result);
          setHideError(true);
        } else {
          setBirthdayId(null);
          setHideError(false);
        }
        setLoading(false);

        clear();
      });
    }
  };
  const clear = () => {
    setShowInputError(false);
    setbirthdayData({
      creator: "",
      birthdayName: "",
    });
  };
  if (!user?.result?.name) {
    return (
      <div className="form-container">
        <h2>Please sign in to start making birthdays.</h2>
      </div>
    );
  }
  return loading ? (
    <LoadingCircle />
  ) : (
    <div className="form-container">
      <h1>Create Birthday Wish</h1>
      <h3 className={hideError ? "hide-birthday-error" : "birthday-error"}>
        Something went wrong and birthday was not created, try again.
      </h3>
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
          <span className={showInputError ? "input-error" : "hide-input-error"}>
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

export default CreateBirthdayForm;
