import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, password } = req.body;
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //check for duplicate user before registeration

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    //encrypt the password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });
    console.log(newUser);
    res.status(201).json({ message: "Registeration successful" });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //check if user is registered or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("password didn't match");
      error.statusCode = 402;
      return next(error);
    }
    console.log("user verified");

    //Token generation will be done here
    genToken(existingUser, res);

    console.log(existingUser);

    res.status(200).json({ message: "Login Successful", data: existingUser });
  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, res, next) => {
  try {
    res.statusCode(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};
