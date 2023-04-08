import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import CreateBirthdayForm from "../../components/form/CreateBirthdayForm";
import "./createBirthday.css";

const CreateBirthday = () => {
  const { birthdayId, copyToClipBoard, copySuccess, setCopySuccess } =
    useGlobalContext();

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

  return (
    <div className="create-birthday-page">
      <CreateBirthdayForm />

      {!birthdayId ? (
        <></>
      ) : (
        <section className="birthday-link-container">
          <h2>
            Here is your{" "}
            <button
              type="button"
              className="birthday-link"
              onClick={() =>
                copyToClipBoard(
                  `${window.location.origin.toString()}/birthday/${birthdayId}`
                )
              }
            >
              Birthday Wish
            </button>
            , share it with your friends and family!
          </h2>

          <NavLink to={`/birthday/${birthdayId}`} className="btn">
            Go to page
          </NavLink>
        </section>
      )}

      <div className={copySuccess ? "copy-success show" : "copy-success"}>
        Link copied to clipboard
      </div>
    </div>
  );
};

export default CreateBirthday;
