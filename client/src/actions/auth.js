import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    return 200;
  } catch (e) {
    return e.request.status;
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    return 200;
  } catch (e) {
    return e.request.status;
  }
};
