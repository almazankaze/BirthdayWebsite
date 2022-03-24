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
