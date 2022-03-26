import { GET_BIRTHDAY } from "../constants/actionTypes";

const birthday = (birthday = null, action) => {
  switch (action.type) {
    case GET_BIRTHDAY:
      return action.payload;
    default:
      return birthday;
  }
};

export default birthday;
