"use server";

import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { postmodel, userModel } from "./models";
import bcrypt from "bcryptjs";

import { signIn, signOut } from "./auth";

export const addPost = async (previousState,formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  console.log(title, desc, slug, userId);

  try {
    connectToDb();
    const post = new postmodel({
      title,
      desc,
      slug,
      userId,
    });
    await post.save();
    console.log("save to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const deletePost = async (formData) => {
  console.log(formData)
  const { id } = Object?.fromEntries(formData);
 
  console.log(id);

  try {
    connectToDb();
    await postmodel.findByIdAndDelete(id);
    console.log("delete to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const adduser = async (previousState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);
  console.log(username, email, password, img);

  try {
    connectToDb();
    const addnnewusers = new userModel({
      username,
      email,
      password,
      img,
    });
    await addnnewusers.save();
    console.log("save to db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};
export const deleteuser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  console.log(id);

  try {
    connectToDb();
    await postmodel.deleteMany({ userId: id });
    await userModel.findByIdAndDelete(id);
    console.log("delete to db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const handlesign = async () => {
  "use server";
  await signIn("github");
};
export const handlelogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  console.log(formData);
  const { username, email, password, img, cpassword } =
    Object.fromEntries(formData);
  console.log(username, email, password, cpassword);

  if (password !== cpassword) {
    return "password does not match";
  }
  const user = await userModel.findOne({ email });

  if (user) {
    return "Email Already Exists";
  }
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  console.log(hashedpassword, salt);
  try {
    connectToDb();
    const registeruser = new userModel({
      username,
      email,
      password: hashedpassword,
      cpassword,
      img,
    });
    await registeruser.save();
    console.log("save to db");
    console.log(registeruser);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const LoginFunc = async (previousState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    console.log(signIn());
    await signIn("credentials", { email, password });
  } catch (err) {
    console.error(err);

    if (err.message.includes("credentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    throw err;
  }
};
