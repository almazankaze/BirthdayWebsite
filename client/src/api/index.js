import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// user birthday routes
export const fetchBirthdays = () => API.get("/birthdays");
export const createBirthday = (newBirthday) =>
  API.post("/birthdays/create", newBirthday);

// home birthday routes
export const fetchExBirthdays = () => API.get("/homebirthdays");
export const fetchExBirthday = (id) => API.get(`/homebirthdays/${id}`);
export const addExPost = (id, post) => API.patch(`/homebirthdays/${id}`, post);
export const deleteExPost = (id, post_id) =>
  API.delete(`/homebirthdays/${id}/post/${post_id}`);
export const updateExPost = (id, post_id, updatedPost) =>
  API.patch(`homebirthdays/${id}/post/${post_id}`, updatedPost);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
