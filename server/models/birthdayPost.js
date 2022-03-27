import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  creator: String,
  posterName: String,
  message: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BirthdayPost = mongoose.model("birthdayPost", postSchema);

export default BirthdayPost;
