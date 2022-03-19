import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  posterName: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BirthdayPost = mongoose.model("birthdayPost", postSchema);

export default BirthdayPost;
