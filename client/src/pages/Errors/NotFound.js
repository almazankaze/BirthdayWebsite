import React from "react";
import { NavLink } from "react-router-dom";
import homerImg from "../../images/homer.png";
import "./errors.css";

const NotFound = () => {
  return (
    <div className="error-page">
      <div className="error-section">
        <div className="error-info">
          <h1 className="error-title">Page Not Found</h1>
          <div className="error-desc">
            <p>We can't find the page you're looking for.</p>
            <p>
              You can either return to the previous page, visit our homepage or
              contact our support team.
            </p>
          </div>

          <div className="btn-container">
            <NavLink to="/">
              <button className="btn" type="button">
                Visit Homepage
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="btn" type="button">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
        <div className="error-img-container">
          <img src={homerImg} alt="homer-doh"></img>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
