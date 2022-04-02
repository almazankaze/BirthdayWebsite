import {
  FETCH_BIRTHDAYS,
  CREATE_BIRTHDAY,
  DELETE_BIRTHDAY,
} from "../constants/actionTypes";

const birthdays = (posts = [], action) => {
  switch (action.type) {
    case FETCH_BIRTHDAYS:
      return action.payload;
    case CREATE_BIRTHDAY:
      return [...posts, action.payload];
    case DELETE_BIRTHDAY:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default birthdays;
