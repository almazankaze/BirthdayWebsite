import {
  CREATE_POST,
  DELETE_POST,
  GET_BIRTHDAY,
  UPDATE_POST,
} from "../constants/actionTypes";

const birthday = (birthday = null, action) => {
  switch (action.type) {
    case GET_BIRTHDAY:
      return action.payload;
    case CREATE_POST:
      return { ...birthday, posts: [...birthday.posts, action.payload] };
    case DELETE_POST:
      return action.payload;
    case UPDATE_POST:
      return action.payload;
    default:
      return birthday;
  }
};

export default birthday;
