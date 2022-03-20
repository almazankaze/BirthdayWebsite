import { combineReducers } from "redux";
import birthdays from "./birthdays";
import birthdayPosts from "./birthdayPosts";

export const reducers = combineReducers({
  birthdays,
  birthdayPosts,
});
