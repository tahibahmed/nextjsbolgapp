import { connectToDb } from "@/lib/connectToDb";
import { userModel } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    const { slug } = params;
    try {
        connectToDb()
      const Getuser = await userModel.findOne({slug});
  
     return NextResponse.json(Getuser);
    } catch (error) {
      console.log(error);
    }
  };