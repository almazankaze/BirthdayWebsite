import React, { useState } from "react";
import "./form.css";

const SignUp = () => {
  const url = "";
  const [showError, setShowError] = useState(false);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpData.email.trim() === "") setShowError(true);
    else {
      setShowError(false);
      clear();
    }
  };
  const clear = () => {
    setSignUpData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            className="input-box"
            value={signUpData.email}
            onChange={(e) =>
              setSignUpData({ ...signUpData, email: e.target.value })
            }
          />
          <span className={showError ? "input-error" : "hide-input-error"}>
            Please enter an email
          </span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="password"
            className="input-box"
            value={signUpData.password}
            onChange={(e) =>
              setSignUpData({ ...signUpData, password: e.target.value })
            }
          />
          <span className={showError ? "input-error" : "hide-input-error"}>
            Please enter a password
          </span>
        </div>

        <button type="submit" className="signup-form-btn signup-btn">
          Sign Up
        </button>
        <hr className="form-divider" />
        <p className="or">OR</p>
        <button type="submit" className="signup-form-btn social-btn">
          Login with Google
        </button>
        <p className="question">
          Already have an account?{" "}
          <a className="form-link" href={url}>
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
