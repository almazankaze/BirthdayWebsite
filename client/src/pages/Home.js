import React from "react";
import { useSelector } from "react-redux";
import Birthday from "../components/birthdays/Birthday";
import LoadingCircle from "../components/loadingCircle/LoadingCircle";
import heroImg from "../images/hero-img.png";
import "./home.css";

const Home = () => {
  const birthdays = useSelector((state) => state.birthdays);
  console.log(birthdays);
  return (
    <div className="home">
      <section className="hero-section">
        <div className="info">
          <h1>Wish Someone You Know A Happy Birthday!</h1>
          <p className="desc">
            Create a page where friends and family can post a message wishing
            someone a happy birthday! Send them the link and watch them feel
            special on their special day!
          </p>
          <button className="btn" type="button">
            Start
          </button>
        </div>
        <div className="hero-img-container">
          <img src={heroImg} alt="Birthday celebration"></img>
        </div>
      </section>
      <section className="birthdays-section">
        <h2>Check Out Some Birthdays</h2>
        {!birthdays ? (
          <LoadingCircle />
        ) : (
          <div>
            {birthdays.map((birthday) => (
              <Birthday key={birthday._id} birthday={birthday} />
            ))}
          </div>
        )}
      </section>
      <footer>
        <div className="container">
          <hr className="footer-divider"></hr>
          <p>Copyright 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
