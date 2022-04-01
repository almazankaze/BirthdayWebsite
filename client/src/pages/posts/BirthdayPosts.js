import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBirthday } from "../../actions/birthdays";
import LoadingCircle from "../../components/loadingCircle/LoadingCircle";
import PostsContainer from "../../components/posts/PostsContainer";
import PostForm from "../../components/form/PostForm";
import "./posts.css";

const BirthdayPosts = () => {
  const dispatch = useDispatch();
  const { birthday_id } = useParams();

  useEffect(() => {
    dispatch(getBirthday(birthday_id));
  }, [dispatch, birthday_id]);

  const birthday = useSelector((state) => state.birthday);
  return !birthday ? (
    <LoadingCircle />
  ) : (
    <div className="birthday-posts">
      <section className="form-title-container">
        <PostForm birthdayId={birthday_id} />
        <h1 className="birthday-title">
          Happy Birthday {birthday.birthdayName}
        </h1>
      </section>
      <PostsContainer posts={birthday.posts} birthdayId={birthday_id} />
    </div>
  );
};

export default BirthdayPosts;
