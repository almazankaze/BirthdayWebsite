import { FETCH_BIRTHDAYS, CREATE_BIRTHDAY } from "../constants/actionTypes";

const birthdays = (posts = [], action) => {
  switch (action.type) {
    case FETCH_BIRTHDAYS:
      return action.payload;
    case CREATE_BIRTHDAY:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default birthdays;
