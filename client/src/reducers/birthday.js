import { CREATE_POST, GET_BIRTHDAY } from "../constants/actionTypes";

const birthday = (birthday = null, action) => {
  switch (action.type) {
    case GET_BIRTHDAY:
      return action.payload;
    case CREATE_POST:
      return { ...birthday, posts: [...birthday.posts, action.payload] };
    default:
      return birthday;
  }
};

export default birthday;
