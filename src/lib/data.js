import { unstable_noStore as noStore } from "next/cache";
import { connectToDb } from "./connectToDb";

const { postmodel, userModel } = require("./models");

export const getposts = async () => {
  try {
    connectToDb();
    const posts = await postmodel.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch");
  }
};
export const getpost = async ( slug ) => {
  try {
    connectToDb();
    const post = await postmodel.findOne({slug});
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch");
  }
};

export const getUser = async (_id) => {
  noStore()
  try {
    connectToDb();
    const user = await userModel.findById(_id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch");
  }
};
export const getusers = async () => {
  try {
    connectToDb();
    const users = await userModel.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Fetch");
  }
};
