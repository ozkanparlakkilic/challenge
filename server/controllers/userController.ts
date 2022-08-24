import asyncHandler from "express-async-handler";
import HttpException from "../helpers/exceptions/HttpException";
import generateToken from "../helpers/token/generateToken";
import User, { IUser } from "../models/userModel";

// @route   POST /api/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, password, isAdmin, friends, totalPoint } = req.body;

  const userExists: IUser | null = await User.findOne({ email });

  if (userExists) {
    throw new HttpException(400, "User already exists");
  }

  const user: IUser = await User.create({
    fullname,
    email,
    password,
    isAdmin,
    friends,
    totalPoint,
  });

  if (user) {
    const { _id } = user;
    const token = generateToken(_id);
    res.status(201).json({
      _id,
      fullname,
      email,
      password,
      friends,
      totalPoint,
      isAdmin,
      token,
    });
  } else {
    throw new HttpException(400, "Invalid user data");
  }
});

// // @route   POST /api/student/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user: IUser | null = await User.findOne({ email }).populate("friends");

  if (user && (await user.matchPassword(password))) {
    const { _id, fullname, email, password, isAdmin, friends, totalPoint } =
      user;
    const token = generateToken(_id);
    res.json({
      _id,
      fullname,
      email,
      password,
      isAdmin,
      friends,
      totalPoint,
      token,
    });
  } else {
    throw new HttpException(401, "Invalid email or password");
  }
});

export { registerUser, loginUser };
