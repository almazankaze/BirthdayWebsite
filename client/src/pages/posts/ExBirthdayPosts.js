import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getExBirthday } from "../../actions/birthdays";
import LoadingCircle from "../../components/loadingCircle/LoadingCircle";
import ExPostsContainer from "../../components/posts/ExPostsContainer";
import ExPostForm from "../../components/form/ExPostForm";
import "./posts.css";

const ExBirthdayPosts = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { birthday_id } = useParams();

  useEffect(() => {
    dispatch(getExBirthday(birthday_id));
  }, [dispatch, birthday_id]);

  const birthday = useSelector((state) => state.birthday);
  return !birthday || isLoading ? (
    <LoadingCircle />
  ) : (
    <div className="birthday-posts">
      <section className="form-title-container">
        <ExPostForm birthdayId={birthday_id} setIsLoading={setIsLoading} />
        <h1 className="birthday-title">
          Happy Birthday {birthday.birthdayName}
        </h1>
      </section>
      <ExPostsContainer posts={birthday.posts} birthdayId={birthday_id} />
    </div>
  );
};

export default ExBirthdayPosts;
