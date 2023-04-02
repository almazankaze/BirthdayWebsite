import heroImg from "../images/hero-img.png";
import { NavLink } from "react-router-dom";

import "./home.css";

const Home = () => {
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
    </div>
  );
};

export default Home;
