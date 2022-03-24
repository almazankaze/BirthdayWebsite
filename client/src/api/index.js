import axios from "axios";

const url = "http://localhost:5000/birthdays";
const homeUrl = "http://localhost:5000/homebirthdays";

export const fetchBirthdays = () => axios.get(url);
export const createBirthday = (newBirthday) => axios.post(url, newBirthday);

// home routes
export const fetchExBirthdays = () => axios.get(homeUrl);
