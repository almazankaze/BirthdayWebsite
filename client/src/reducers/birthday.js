import {
  CREATE_HOMEPOST,
  CREATE_POST,
  DELETE_HOMEPOST,
  DELETE_POST,
  GET_BIRTHDAY,
  GET_HOMEBIRTHDAY,
} from "../constants/actionTypes";

const birthday = (birthday = null, action) => {
  switch (action.type) {
    case GET_BIRTHDAY:
    case GET_HOMEBIRTHDAY:
      return action.payload;
    case CREATE_POST:
    case CREATE_HOMEPOST:
      return { ...birthday, posts: [...birthday.posts, action.payload] };
    case DELETE_POST:
    case DELETE_HOMEPOST:
      return action.payload;
    default:
      return birthday;
  }
};

export default birthday;
