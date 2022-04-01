import mongoose from "mongoose";
import Birthday from "../models/birthday.js";
import BirthdayPost from "../models/birthdayPost.js";

// get all birthdays from database
export const getBirthdays = async (req, res) => {
  try {
    const birthdays = await Birthday.find();

    res.status(200).json(birthdays);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

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

// get one birthday from database
export const getBirthday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");
  try {
    const birthday = await Birthday.findById(id);
    res.status(200).json(birthday);
  } catch (e) {
    res.status(404).json({ message: e.message });
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
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await Birthday.findByIdAndUpdate(
      id,
      { $push: { posts: newPost } },
      { new: true }
    );

    res.status(201).json(newPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};

// delete one post from a birthday
export const deletePost = async (req, res) => {
  const { id, post_id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");

  try {
    const updatedBirthday = await Birthday.findByIdAndUpdate(
      id,
      { $pull: { posts: { _id: post_id } } },
      { new: true }
    );

    res.json(updatedBirthday);
  } catch (e) {
    res.json({ message: e.message });
  }
};

// update one post from a birthday
export const updatePost = async (req, res) => {
  const { id, post_id } = req.params;

  const updatedPost = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");

  try {
    const updatedBirthday = await Birthday.findOneAndUpdate(
      { _id: id, "posts._id": post_id },
      { $set: { "posts.$.message": updatedPost.message } },
      { new: true }
    );

    res.json(updatedBirthday);
  } catch (e) {
    res.json({ message: e.message });
  }
};
