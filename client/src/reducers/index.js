import { combineReducers } from "redux";
import birthdays from "./birthdays";
import birthday from "./birthday";

export const reducers = combineReducers({
  birthdays,
  birthday,
});
