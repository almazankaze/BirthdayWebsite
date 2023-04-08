import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import OAuth2Client from "google-auth-library";

import User from "../models/user.js";

dotenv.config();
const secret = process.env.SECRET;

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "user does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "invalid credentials" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(404).json({ message: "user already exists" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "passwords do not match" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: name,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token });
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const googlesign = async (req, res) => {
  const { token } = req.body;
  const client_id = process.env.GOOGLE_CLIENT;
  const client = new OAuth2Client(client_id);

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: client_id,
  });
  // Get the JSON with all the user info
  const payload = ticket.getPayload();

  try {
    const existingUser = await User.findOne(payload.email);

    if (!existingUser) {
      const result = await User.create({
        email: payload.email,
        name: payload.name,
      });

      res.status(201).json({ result, token });
      return;
    } else {
      res.status(200).json({ result: existingUser, token });
    }
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
};
