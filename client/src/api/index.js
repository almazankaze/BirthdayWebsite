import axios from "axios";

const url = "http://localhost:5000/birthdays";

export const fetchBirthdays = () => axios.get(url);
export const createBirthday = (newBirthday) => axios.post(url, newBirthday);
