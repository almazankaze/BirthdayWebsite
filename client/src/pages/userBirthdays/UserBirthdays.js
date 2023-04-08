import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBirthdays } from "../../actions/birthdays";
import { useGlobalContext } from "../../context";
import Birthday from "../../components/birthdays/Birthday";
import LoadingCircle from "../../components/loadingCircle/LoadingCircle";
import "./userBirthdays.css";

const UserBirthdays = () => {
  const dispatch = useDispatch();
  const { copySuccess, setCopySuccess } = useGlobalContext();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (user?.result?._id) {
      dispatch(getBirthdays(user?.result?._id));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!copySuccess) return;

    const intervalId = setInterval(() => {
      setCopySuccess(false);
    }, 2500);

    return () => {
      setCopySuccess(false);
      clearInterval(intervalId);
    };
  }, [copySuccess]);

  const birthdays = useSelector((state) => state.birthdays);

  if (!user) {
    return (
      <div className="wish-form-container">
        <h2>Please sign in to display your birthdays.</h2>
      </div>
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

      <div className={copySuccess ? "copy-success show" : "copy-success"}>
        Link copied to clipboard
      </div>
    </section>
  );
};

export default UserBirthdays;
