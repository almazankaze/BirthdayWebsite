import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../../actions/auth";
import { useGlobalContext } from "../../../context";
import { Link, useNavigate } from "react-router-dom";
import LoadingCircle from "../../loadingCircle/LoadingCircle";

import { getEmailFragments } from "../../../utilities/functions/getEmailFragments";
import { isEmail } from "../../../utilities/functions/isEmail";

import "./auth.css";

const defaultFormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [otherError, setOtherError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setBirthdayId } = useGlobalContext();

  const GOOGLE = process.env.REACT_APP_GOOGLE;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const resetFormErrors = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmError("");
    setOtherError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setBirthdayId(null);
    resetFormErrors();

    if (isSignup) {
      if (!isEmail(email)) {
        setEmailError("Invalid email");
        return;
      }

      let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
      );

      if (!strongPassword.test(password)) {
        setPasswordError(
          "Password should have at least one lowercase letter, one uppercase letter, one digit, one special character, and is at least eight characters long."
        );
      }

      if (password !== confirmPassword) {
        setConfirmError("Passwords should match");
        return;
      }

      setLoading(true);

      const [displayName, domain] = getEmailFragments(email);

      dispatch(signup({ ...formFields, name: displayName })).then((status) => {
        resetFormFields();

        if (status === 200) {
          navigate(0);
        } else if (status === 404) {
          setOtherError("User with email already exists");
        } else {
          setOtherError("Something went wrong. Please try again");
        }

        setLoading(false);
      });
    } else {
      if (!isEmail(email)) {
        setOtherError("Please enter valid email");
        return;
      }

      if (formFields.password.trim() === "") {
        setOtherError("Please enter password");
        return;
      }

      setLoading(true);

      dispatch(signin(formFields)).then((status) => {
        resetFormFields();

        if (status === 200) {
          navigate(0);
        } else if (status === 400) {
          setOtherError("Incorrect email or password");
        } else if (status === 404) {
          setOtherError("User not found");
        } else {
          setOtherError("Something went wrong. Please try again");
        }

        setLoading(false);
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const switchMode = () => {
    resetFormErrors();
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      resetFormFields();
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
    <div className="form-container">
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="form-input">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <span></span>
          <label>Email</label>
        </div>

        <span className="input-error">{emailError}</span>

        <div className="form-input">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <span></span>
          <label>Password</label>
        </div>

        <span className="input-error">{passwordError}</span>

        {isSignup && (
          <>
            <div className="form-input">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={confirmPassword}
                required
              />
              <span></span>
              <label>Confirm Password</label>
            </div>
            <span className="input-error">{confirmError}</span>
          </>
        )}

        <div className="input-error last-error">{otherError}</div>

        {!isSignup && (
          <div className="form-options">
            <div className="remember-check">
              <input type="checkbox" id="form-checkbox" />
              <label htmlFor="form-checkbox">Remember me</label>
            </div>

            <Link to="/" className="forgot-password">
              Forgot Password?
            </Link>
          </div>
        )}

        <button type="submit" className="form-btn">
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        {!isSignup && (
          <>
            <hr className="form-divider" />
            <p className="or">OR</p>
            <button type="button" className="form-btn google-btn">
              Login with Google
            </button>
          </>
        )}

        <p className="form-question">
          {isSignup ? "Already have an account? " : "Don't have an account? "}

          <button type="button" onClick={switchMode} className="form-link">
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
