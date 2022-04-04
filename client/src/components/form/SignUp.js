import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { useGlobalContext } from "../../context";
import formUtil from "../../utilities/formUtil";
import LoadingCircle from "../loadingCircle/LoadingCircle";
import "./form.css";
import FormErrors from "./FormErrors";

const SignUp = () => {
  const [showError, setShowError] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState(
    formUtil.formDefaults.formErrors
  );

  const { setBirthdayId } = useGlobalContext();

  const GOOGLE = process.env.REACT_APP_GOOGLE;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoginFail(false);
    setBirthdayId(null);
    if (isSignup) {
      formUtil.checkPasswords();

      if (formUtil.signUpvalidForm()) {
        setLoading(true);
        dispatch(signup(formUtil.formVariables.formValues)).then((success) => {
          clear();
          if (success) {
            navigate("/");
          } else {
            setLoginFail(true);
          }
        });
      } else {
        setFormErrors({ ...formUtil.formVariables.formErrors });
        setShowError(true);
      }
    } else {
      if (formUtil.signInvalidForm()) {
        setLoading(true);
        dispatch(signin(formUtil.formVariables.formValues)).then((success) => {
          clear();
          if (success) {
            navigate("/");
          } else {
            setLoginFail(true);
          }
        });
      } else {
        setFormErrors({ ...formUtil.formVariables.formErrors });
        setShowError(true);
      }
    }
  };
  const clear = () => {
    setLoading(false);
    setShowError(false);
    formUtil.clear();
    setFormErrors({ ...formUtil.formVariables.formErrors });
  };

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setLoginFail(false);
  };

  const handleChange = (e) => {
    formUtil.setValue(e.target.name, e.target.value);
    formUtil.validateField(e.target.name, e.target.value);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      clear();
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (e) {
      console.log("fail");
    }

    setBirthdayId(null);
  };

  const googleFailure = () => {
    console.log("fail");
  };
  return loading ? (
    <LoadingCircle />
  ) : (
    <div>
      <FormErrors show={showError} formErrors={formErrors} />
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
              </div>
            </>
          )}

          <span className={loginFail ? "input-error" : "hide-input-error"}>
            Something went wrong and could not{" "}
            {isSignup ? "sign up" : "sign in"}, try again
          </span>

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
    </div>
  );
};

export default SignUp;
