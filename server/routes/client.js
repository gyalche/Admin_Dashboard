import express from 'express';
import {
  getCustomers,
  getProducts,
  getTransactions,
} from '../controllers/client.js';
const router = new express.Router();

router.get('/products', getProducts);
router.get('/customers', getCustomers);
router.get('/transactions', getTransactions);
export default router;
