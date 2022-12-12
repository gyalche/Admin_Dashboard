import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mongoConnection from './DB/db.js';
import user from './models/user.js';
import { dataUser } from './data/index.js';

//config;
dotenv.config();
mongoConnection();

//function seeder;
const importData = async () => {
  try {
    // await User.deleteMany();
    const data = await user.insertMany(dataUser);
    console.log(`All items added`);
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

importData();
