import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.set('strictQuery', true);

const mongoConnection = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`mongodb is connnect at ${data.connection.host} `);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnection;
