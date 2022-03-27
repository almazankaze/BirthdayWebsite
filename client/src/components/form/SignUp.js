import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import "./form.css";

const initFormState = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [showError, setShowError] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initFormState);

  const GOOGLE = process.env.REACT_APP_GOOGLE;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === "") setShowError(true);
    else {
      setLoading(true);
      if (isSignup) {
        dispatch(signup(formData)).then((success) => {
          setLoading(false);
          if (success) {
            navigate("/");
          } else {
            console.log("error");
          }
        });
      } else {
        dispatch(signin(formData)).then((success) => {
          setLoading(false);
          if (success) {
            navigate("/");
          } else {
            console.log("error");
          }
        });
      }
      setShowError(false);
      clear();
    }
  };
  const clear = () => {
    setFormData(initFormState);
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (e) {
      console.log("fail");
    }
  };

  const googleFailure = () => {
    console.log("fail");
  };
  return loading ? (
    <LoadingCircle />
  ) : (
    <div className="form-container">
      <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-box"
            autoFocus
            onChange={handleChange}
          />
          <span className={showError ? "input-error" : "hide-input-error"}>
            Please enter an email
          </span>
        </div>

        {isSignup && (
          <>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Name to display"
                className="input-box"
                onChange={handleChange}
              />
              <span className={showError ? "input-error" : "hide-input-error"}>
                Please enter a name to display
              </span>
            </div>
          </>
        )}

        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-box"
            onChange={handleChange}
          />
          <span className={showError ? "input-error" : "hide-input-error"}>
            Please enter a password
          </span>
        </div>

        {isSignup && (
          <>
            <div className="input-container">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
                className="input-box"
                onChange={handleChange}
              />
              <span className={showError ? "input-error" : "hide-input-error"}>
                Passwords should match
              </span>
            </div>
          </>
        )}

        <button
          type="submit"
          className="signup-form-btn signup-btn"
          onClick={handleSubmit}
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>
        <hr className="form-divider" />
        <p className="or">OR</p>

        <GoogleLogin
          clientId={GOOGLE}
          render={(renderProps) => (
            <button
              type="button"
              className="signup-form-btn social-btn"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login with Google
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        />

        <p className="question">
          {isSignup ? "Already have an account? " : "Don't have an account? "}

          <button type="button" onClick={switchMode} className="form-link">
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
