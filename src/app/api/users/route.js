import { userModel } from "@/lib/models";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new userModel({
      username,
      email,
      password,
    });
    const userSs = await user.save();
    NextResponse.json({
      message: "User saved",
      userSs,
    });
  } catch (error) {
    console.log(error);
  }
};

