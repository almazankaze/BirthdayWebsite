import mongoose from "mongoose";
import BirthdayPost from "./birthdayPost.js";

const birthdaySchema = mongoose.Schema({
  creator: String,
  birthdayName: String,
  posts: [BirthdayPost.schema],
});

const Birthday = mongoose.model("birthday", birthdaySchema);

export default Birthday;
