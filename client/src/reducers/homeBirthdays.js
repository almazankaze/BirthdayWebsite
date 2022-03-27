import { FETCH_HOMEBIRTHDAYS } from "../constants/actionTypes";

const homeBirthdays = (posts = [], action) => {
  switch (action.type) {
    case FETCH_HOMEBIRTHDAYS:
      return action.payload;
    default:
      return posts;
  }
};

export default homeBirthdays;
