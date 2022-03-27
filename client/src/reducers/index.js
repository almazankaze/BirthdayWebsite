import { combineReducers } from "redux";
import homeBirthdays from "./homeBirthdays";
import birthdays from "./birthdays";
import birthday from "./birthday";
import auth from "./auth";

export const reducers = combineReducers({
  homeBirthdays,
  birthdays,
  birthday,
  auth,
});
