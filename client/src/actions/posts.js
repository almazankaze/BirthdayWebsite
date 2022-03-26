import { CREATE_POST } from "../constants/actionTypes";

import * as api from "../api/index";

export const addExPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.addExPost(id, post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (e) {
    console.log("could not create POST");
  }
};
