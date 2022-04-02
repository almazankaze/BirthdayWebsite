import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import CreateBirthdayForm from "../../components/form/CreateBirthdayForm";
import "./createBirthday.css";

const CreateBirthday = () => {
  const { birthdayId } = useGlobalContext();

  return (
    <div className="create-birthday-page">
      <CreateBirthdayForm />

      {!birthdayId ? (
        <></>
      ) : (
        <section className="birthday-link-container">
          <h2>
            Here is your{" "}
            <NavLink to={`/birthday/${birthdayId}`} className="birthday-link">
              Birthday Wish
            </NavLink>
            , share it with your friends and family!
          </h2>
        </section>
      )}
    </div>
  );
};

export default CreateBirthday;
