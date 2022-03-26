import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getExBirthdays } from "../actions/birthdays";
import HomeBirthday from "../components/birthdays/HomeBirthday";
import LoadingCircle from "../components/loadingCircle/LoadingCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import heroImg from "../images/hero-img.png";
import hutaoImg from "../images/hu-tao.jpg";
import kirbyImg from "../images/Kirby.jpg";
import vergilImg from "../images/vergil.jpg";
import lucinaImg from "../images/lucina.jpg";
import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExBirthdays());
  }, [dispatch]);
  const birthdayImgs = [vergilImg, hutaoImg, lucinaImg, kirbyImg];
  const birthdays = useSelector((state) => state.birthdays);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="info">
          <h1 className="section-title">
            Wish Someone You Know A Happy Birthday!
          </h1>
          <p className="desc">
            Create a page where friends and family can post a message wishing
            someone a happy birthday! Send them the link and watch them feel
            special on their special day!
          </p>
          <NavLink to="/auth">
            <button className="btn" type="button">
              Start
            </button>
          </NavLink>
        </div>
        <div className="hero-img-container">
          <img src={heroImg} alt="Birthday celebration"></img>
        </div>
      </section>
      <section className="birthdays-section">
        <h1 className="section-title">Check Out Some Birthdays</h1>
        {!birthdays ? (
          <LoadingCircle />
        ) : (
          <div className="home-cards">
            {birthdays.map((birthday, i) => (
              <HomeBirthday
                key={birthday._id}
                birthday={birthday}
                image={birthdayImgs.at(i)}
              />
            ))}
          </div>
        )}
      </section>
      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-heading footer-col">
              <h2>Location</h2>
              <p>60, 29th fake pine, San Fransisco, CA 95612, United States</p>
              <p>(+00) 123-456-7890</p>
            </div>
            <div className="footer-heading footer-col">
              <h2>Company</h2>
              <p className="footer-link">About Us</p>
              <p className="footer-link">Privacy Policy</p>
              <p className="footer-link">Our Services</p>
              <p className="footer-link">Store</p>
            </div>
            <div className="footer-heading footer-col">
              <h2 className="footer-link">Contact Us</h2>
              <p className="footer-link">Careers</p>
              <p className="footer-link">Support</p>
              <p className="footer-link">Contact</p>
            </div>
            <div className="footer-heading footer-col">
              <h2>Follow Us</h2>
              <div className="footer-social">
                <div className="social-link">
                  <FacebookIcon sx={{ fontSize: 24 }} />
                </div>
                <div className="social-link">
                  <TwitterIcon sx={{ fontSize: 24 }} />
                </div>
                <div className="social-link">
                  <LinkedInIcon sx={{ fontSize: 24 }} />
                </div>
                <div className="social-link">
                  <InstagramIcon sx={{ fontSize: 24 }} />
                </div>
              </div>
            </div>
          </div>

          <hr className="footer-divider"></hr>
          <p>Copyright 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
