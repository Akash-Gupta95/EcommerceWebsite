import mongoose from "mongoose";
import colors from "colors";
const MONGO_URL =
  "mongodb+srv://akashkashyapy:ak%401611xx@ecommerce.cotdcu3.mongodb.net/ecommerceGO_URL";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
