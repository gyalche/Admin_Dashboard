import mongoose from 'mongoose';
import dotenv from 'dotenv';
import mongoConnection from './DB/db.js';
import user from './models/user.js';
import Product from './models/Product.js';
import ProductStat from './models/ProductStat.js';
import Transaction from './models/Transaction.js';
import OverallStat from './models/OverallStat.js';
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from './data/index.js';

//config;
dotenv.config();
mongoConnection();

//function seeder;
const importData = async () => {
  try {
    // // await User.deleteMany();
    // await user.insertMany(dataUser);
    // //inserting in product;
    // await Product.insertMany(dataProduct);

    //insert in transactions;
    // await Transaction.insertMany(dataTransaction);

    //inserting in productstat;
    // await ProductStat.insertMany(dataProductStat);

    //insert into overallStat;
    await OverallStat.insertMany(dataOverallStat);

    console.log(`All items added`);
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

importData();
