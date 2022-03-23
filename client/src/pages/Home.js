import React from "react";
import { useSelector } from "react-redux";
import Birthday from "../components/birthdays/Birthday";
import LoadingCircle from "../components/loadingCircle/LoadingCircle";

const Home = () => {
  const birthdays = useSelector((state) => state.birthdays);
  return !birthdays ? (
    <LoadingCircle />
  ) : (
    <div>
      {birthdays.map((birthday) => (
        <Birthday key={birthday._id} birthday={birthday} />
      ))}
    </div>
  );
};

export default Home;
