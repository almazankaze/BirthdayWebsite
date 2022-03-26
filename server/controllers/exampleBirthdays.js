import mongoose from "mongoose";
import BirthdayPost from "../models/birthdayPost.js";
import ExampleBirthday from "../models/exampleBirthday.js";

// get all birthdays from database
export const getExamples = async (req, res) => {
  try {
    const birthdays = await ExampleBirthday.find();

    res.status(200).json(birthdays);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// get one birthday from database
export const getOneExample = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");
  try {
    const birthday = await ExampleBirthday.findById(id);
    res.status(200).json(birthday);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// create a birthday
export const createExample = async (req, res) => {
  const birthdayInfo = req.body;

  const newBirthday = new ExampleBirthday(birthdayInfo);
  try {
    await newBirthday.save();

    res.status(201).json(newBirthday);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

// add a post to birthday
export const addPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");

  const post = req.body;

  const newPost = new BirthdayPost({
    ...post,
    creator: "John",
    createdAt: new Date().toISOString(),
  });

  try {
    await ExampleBirthday.findByIdAndUpdate(
      id,
      { $push: { posts: newPost } },
      { new: true }
    );

    res.status(201).json(newPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};
