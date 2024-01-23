const { default :mongoose } = require("mongoose");
const connection = {};
export const connectToDb = async () => {

  try {
    if (connection.isConnected) {
      console.log("connected is Existing ");
      return;
    }
    const db = await mongoose.connect("mongodb+srv://muhammadtahib:Sybrid098@canvasdigital.rvnqiwu.mongodb.net/next14blog?retryWrites=true&w=majority");

    connection.isConnected = db.connections[0].readyState

    // db.once("open", () => {
    //   console.log("Connected to MongoDB");
    // });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
