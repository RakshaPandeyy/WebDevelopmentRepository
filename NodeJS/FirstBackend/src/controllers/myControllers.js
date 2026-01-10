import User from "../models/userModel.js";
export const userRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      return next(error);
      // res.status(409).json({message : "Email already exists"})
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });
    console.log(newUser);

    res.status(201).json({ message: "user registeration successful" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All the fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }
    const isVerified = password === existingUser.password;
    if (!isVerified) {
      const error = new Error("Unauthorized User");
      error.statusCode = 402;
      return next(error);
    }
    console.log(existingUser);
    res.status(200).json({ message: "Welcome back", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const userLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).json({ messsage: "Internal Server Error" });
  }
};

export const userUpdate = async(req,res,next) => {
  try{
    const{ fullName, email, phone } = req.body;
    

    if (!fullName || !email || !phone ) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      return next(error);
      // res.status(409).json({message : "Email already exists"})
    }
    existingUser.fullName = fullName;
    existingUser.phone = phone;
    existingUser.email = email;

    await existingUser.save();

    res.status(200).json({ message: "Details Updated", data:existingUser});
  }
  catch(error){
    console.log(error);
    next(error);
  }
};