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

// get a specific birthday from database
export const getOneBirthday = async (req, res) => {
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

// update info for one birthday
export const updateBirthday = async (req, res) => {
  const { id: _id } = req.params;
  const birthday = req.body;

  console.log("hello");

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No birthday with that id exists");

  try {
    const updatedBirthday = await Birthday.findByIdAndUpdate(
      _id,
      { ...birthday, _id },
      { new: true }
    );

    res.json(updatedBirthday);
  } catch (e) {
    res.json({ message: e.message });
  }
};

// add a post to a birthday
export const addPost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");

  const post = req.body;

  console.log(post);

  const newPost = new BirthdayPost({
    ...post,
    createdAt: new Date().toISOString(),
  });

  try {
    const birthday = await Birthday.findByIdAndUpdate(
      id,
      { $push: { posts: newPost } },
      { new: true }
    );

    res.json(birthday);
  } catch (e) {
    res.json({ message: e.message });
  }
};

// delete a birthday from the database
export const deleteBirthday = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");

  try {
    await Birthday.findByIdAndRemove(id);

    res.json({ message: "Birthday was deleted successfully" });
  } catch (e) {
    res.json({ message: e.message });
  }
};

// delete one post from a birthday
export const deletePost = async (req, res) => {
  const { id, postId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No birthday with that id exists");

  try {
    const updatedBirthday = await Birthday.findByIdAndUpdate(
      id,
      { $pull: { posts: { _id: postId } } },
      { new: true }
    );

    res.json(updatedBirthday);
  } catch (e) {
    res.json({ message: e.message });
  }
};
