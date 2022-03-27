import { combineReducers } from "redux";
import birthdays from "./birthdays";
import birthday from "./birthday";
import auth from "./auth";

export const reducers = combineReducers({
  birthdays,
  birthday,
  auth,
});
