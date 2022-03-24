import mongoose from "mongoose";
import BirthdayPost from "./birthdayPost.js";

const birthdaySchema = mongoose.Schema({
  creator: String,
  birthdayName: String,
  posts: [BirthdayPost.schema],
});

const ExampleBirthday = mongoose.model("homebirthday", birthdaySchema);

export default ExampleBirthday;
