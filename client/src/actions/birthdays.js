import {
  CREATE_BIRTHDAY,
  FETCH_BIRTHDAYS,
  GET_BIRTHDAY,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const getBirthdays = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBirthdays();

    dispatch({ type: FETCH_BIRTHDAYS, payload: data });
  } catch (e) {
    console.log("could not get birthdays");
  }
};

export const getExBirthdays = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExBirthdays();

    dispatch({ type: FETCH_BIRTHDAYS, payload: data });
  } catch (e) {
    console.log("could not get birthdays");
  }
};

export const getExBirthday = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchExBirthday(id);

    dispatch({ type: GET_BIRTHDAY, payload: data });
  } catch (e) {
    console.log("could not get birthday");
  }
};

export const createBirthday = (birthday) => async (dispatch) => {
  try {
    const { data } = await api.createBirthday(birthday);

    dispatch({ type: CREATE_BIRTHDAY, payload: data });
  } catch (e) {
    console.log("could not create birthday");
  }
};
