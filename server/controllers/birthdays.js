import mongoose from "mongoose";
import Birthday from "../models/birthday.js";
import BirthdayPost from "../models/birthdayPost.js";

// create a birthday
export const createBirthday = async (req, res) => {
  const birthdayInfo = req.body;

  const newBirthday = new Birthday(birthdayInfo);

  try {
    await newBirthday.save();

    res.status(201).json(newBirthday);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};
