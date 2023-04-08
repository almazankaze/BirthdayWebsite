import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

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

    const result = {
      email: existingUser.email,
      name: existingUser.name,
      _id: existingUser._id,
    };

    res.status(200).json({ result, token });
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

    const user = await User.create({
      email,
      password: hashedPassword,
      name: name,
    });

    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "1h",
    });

    const result = {
      email: user.email,
      name: user.name,
      _id: user._id,
    };

    res.status(201).json({ result, token });
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const googlesign = async (req, res) => {
  const { token } = req.body;
  const client_id = process.env.GOOGLE_CLIENT;
  const client = new OAuth2Client(client_id);

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: client_id,
    });
    // Get the JSON with all the user info
    const payload = ticket.getPayload();

    const result = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
      _id: payload.sub,
    };

    res.status(201).json({ result });
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
};
