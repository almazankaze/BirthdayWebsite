import axios from "axios";

const myUrl = "https://birthday-mernjs.herokuapp.com/";
// const myUrl = "http://localhost:5000"

const API = axios.create({ baseURL: myUrl });

// user birthday routes
export const fetchBirthdays = (creator) => API.get(`/birthdays/${creator}`);
export const fetchBirthday = (id) => API.get(`/birthdays/wish/${id}`);
export const removeBirthday = (id) => API.delete(`/birthdays/wish/${id}`);
export const createBirthday = (newBirthday) =>
  API.post("/birthdays/create", newBirthday);
export const addPost = (id, post) => API.patch(`/birthdays/${id}`, post);
export const deletePost = (id, post_id) =>
  API.delete(`/birthdays/${id}/post/${post_id}`);
export const updatePost = (id, post_id, updatedPost) =>
  API.patch(`birthdays/${id}/post/${post_id}`, updatedPost);

// home birthday routes
export const fetchExBirthdays = () => API.get("/homebirthdays");
export const fetchExBirthday = (id) => API.get(`/homebirthdays/${id}`);
export const addExPost = (id, post) => API.patch(`/homebirthdays/${id}`, post);
export const deleteExPost = (id, post_id) =>
  API.delete(`/homebirthdays/${id}/post/${post_id}`);
export const updateExPost = (id, post_id, updatedPost) =>
  API.patch(`homebirthdays/${id}/post/${post_id}`, updatedPost);
