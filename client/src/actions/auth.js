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
    const { profile } = await api.googleSignIn(token);

    if (profile) {
      const result = {
        email: profile.email,
        name: profile.name,
        picture: profile.picture,
        _id: profile.sub,
      };

      dispatch({ type: "AUTH", data: { result, token: token } });
      return 200;
    }
  } catch (e) {
    return 400;
  }
};
