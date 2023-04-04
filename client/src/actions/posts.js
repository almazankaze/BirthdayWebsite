import {
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../constants/actionTypes";

import * as api from "../api/index";

export const addPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.addPost(id, post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (e) {
    console.log("could not create post");
  }
};

export const deletePost = (id, post_id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id, post_id);

    dispatch({ type: DELETE_POST, payload: data });
  } catch (e) {
    console.log("could not delete post");
  }
};

export const updatePost = (id, post_id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post_id, updatedPost);

    dispatch({ type: UPDATE_POST, payload: data });
  } catch (e) {
    console.log("could not update post");
  }
};
