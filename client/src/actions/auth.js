import { SET_CURRENT_USER } from "../constants/actionTypes";
import { createAction } from "../utilities/reducer";

export const setCurrentUser = (user) => createAction(SET_CURRENT_USER, user);
