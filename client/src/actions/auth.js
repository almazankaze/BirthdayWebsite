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

export const googlesign = (token) => async (dispatch) => {
  try {
    const { data } = await api.googleSignIn(token);

    if (data) {
      dispatch({
        type: "AUTH",
        data: { result: data.result, token: token.token },
      });
      return 200;
    } else {
      return 400;
    }
  } catch (e) {
    return 400;
  }
};
