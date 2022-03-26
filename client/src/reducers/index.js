import { combineReducers } from "redux";
import birthdays from "./birthdays";
import birthdayPosts from "./birthdayPosts";
import birthday from "./birthday";

export const reducers = combineReducers({
  birthdays,
  birthday,
  birthdayPosts,
});
