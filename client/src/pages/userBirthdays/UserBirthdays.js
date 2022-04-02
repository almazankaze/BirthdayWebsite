import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBirthdays } from "../../actions/birthdays";
import { NavLink } from "react-router-dom";
import Birthday from "../../components/birthdays/Birthday";
import LoadingCircle from "../../components/loadingCircle/LoadingCircle";
import "./userBirthdays.css";

const UserBirthdays = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (user?.result?._id) {
      dispatch(getBirthdays(user?.result?._id));
    } else {
      dispatch(getBirthdays(user?.result?.googleId));
    }
  }, [dispatch]);

  const birthdays = useSelector((state) => state.birthdays);

  if (!user) {
    return (
      <section className="text-center">
        <h1 className="section-title">
          Please{" "}
          <NavLink className="signin-link" to="/auth">
            Sign In
          </NavLink>{" "}
          to display the birthdays you created.
        </h1>
      </section>
    );
  }

  return (
    <section className="text-center">
      <h1 className="section-title">Birthdays You Created</h1>
      {!birthdays ? (
        <LoadingCircle />
      ) : (
        <div className="user-birthdays-container">
          {birthdays.map((birthday) => (
            <Birthday key={birthday._id} birthday={birthday} />
          ))}
        </div>
      )}
    </section>
  );
};

export default UserBirthdays;
