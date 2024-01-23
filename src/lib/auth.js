import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDb } from "./connectToDb";
import { userModel } from "./models";
import { authConfig } from "./auth.config";


const LoginFunc = async (credentials) => {
  console.log(credentials)
  try {
    connectToDb();
    const user = await userModel.findOne({ email: credentials.email });
    if (!user) throw new Error("Wrong credentials");
    const ispassword = await bcrypt.compare(credentials.password,user.password);
    if (!ispassword) {
      throw new Error("wrong Passowrd");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  secret: "GK3FmHG0tpPt5NmaLmXkfuMSJfnQYWduX5R6SD387RU=",
  
  providers: [
    GitHub({
      clientId: "7d211154678bf151ee1b",
      clientSecret: "d8319e25a4919dcf00fa087acf4fedbbc5df06d0",
    }),
    CredentialsProvider({async authorize(credentials) {
        try {
          const users = await LoginFunc(credentials)
          return users
        } catch (error) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await userModel.findOne({ email: profile.email });
          if (!user) {
            const newuser = userModel({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newuser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks
  },
});
