import mongoose from "mongoose";

const mongoConnect = async () => {
  try {
    const conStr = "mongodb://localhost:27017/aug_a_ntdl";
    const con = await mongoose.connect(conStr);

    con && console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
