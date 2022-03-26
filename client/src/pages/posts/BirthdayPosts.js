import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getExBirthday } from "../../actions/birthdays";
import LoadingCircle from "../../components/loadingCircle/LoadingCircle";
import PostsContainer from "../../components/posts/PostsContainer";
import PostForm from "../../components/form/PostForm";

const BirthdayPosts = () => {
  const dispatch = useDispatch();
  const { birthday_id } = useParams();

  useEffect(() => {
    dispatch(getExBirthday(birthday_id));
  }, [dispatch, birthday_id]);

  const birthday = useSelector((state) => state.birthday);
  return !birthday ? (
    <LoadingCircle />
  ) : (
    <div>
      <h1>Happy Birthday {birthday.birthdayName}</h1>
      <PostsContainer />
      <PostForm />
    </div>
  );
};

export default BirthdayPosts;
