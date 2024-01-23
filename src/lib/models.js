const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models?.users || mongoose.model("users", userSchema);
export const postmodel =
  mongoose.models?.posts || mongoose.model("posts", postSchema);
