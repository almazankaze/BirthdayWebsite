import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchBirthdays = () => API.get("/birthdays");
export const createBirthday = (newBirthday) =>
  API.post("/birthdays", newBirthday);

// home routes
export const fetchExBirthdays = () => API.get("/homebirthdays");
export const fetchExBirthday = (id) => API.get(`/homebirthdays/${id}`);
export const addExPost = (id, post) => API.patch(`/homebirthdays/${id}`, post);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
