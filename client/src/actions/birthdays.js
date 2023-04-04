import {
  FETCH_BIRTHDAYS,
  CREATE_BIRTHDAY,
  GET_BIRTHDAY,
  DELETE_BIRTHDAY,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getBirthdays = (creator) => async (dispatch) => {
  try {
    const { data } = await api.fetchBirthdays(creator);

    dispatch({ type: FETCH_BIRTHDAYS, payload: data });
  } catch (e) {
    console.log("could not get birthdays");
  }
};

export const getBirthday = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchBirthday(id);

    dispatch({ type: GET_BIRTHDAY, payload: data });
  } catch (e) {
    console.log("could not get birthday");
  }
};

export const createBirthday = (birthday) => async (dispatch) => {
  try {
    const { data } = await api.createBirthday(birthday);

    dispatch({ type: CREATE_BIRTHDAY, payload: data });

    return data._id;
  } catch (e) {
    console.log("could not create birthday");
  }

  return null;
};

export const deleteBirthday = (id) => async (dispatch) => {
  try {
    await api.removeBirthday(id);

    dispatch({ type: DELETE_BIRTHDAY, payload: id });
  } catch (e) {
    console.log("could not delete birthday");
  }
};
