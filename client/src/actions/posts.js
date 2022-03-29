import {
  CREATE_HOMEPOST,
  DELETE_HOMEPOST,
  UPDATE_HOMEPOST,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const addExPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.addExPost(id, post);

    dispatch({ type: CREATE_HOMEPOST, payload: data });
  } catch (e) {
    console.log("could not create POST");
  }
};

export const deleteExPost = (id, post_id) => async (dispatch) => {
  try {
    const { data } = await api.deleteExPost(id, post_id);

    dispatch({ type: DELETE_HOMEPOST, payload: data });
  } catch (e) {
    console.log("could not delete post");
  }
};

export const updateExPost = (id, post_id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updateExPost(id, post_id, updatedPost);

    dispatch({ type: UPDATE_HOMEPOST, payload: data });
  } catch (e) {
    console.log("could not update post");
  }
};
