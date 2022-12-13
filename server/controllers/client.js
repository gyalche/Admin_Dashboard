import Product from '../models/Product.js';
import ProductStat from '../models/ProductStat.js';
import user from '../models/User.js';
// import user from './models/user.js';
export const getProducts = async (req, res, next) => {
  try {
    const product = await Product.find();

    const productWithStats = await Promise.all(
      product.map(async (product) => {
        const stat = await ProductStat.find({ productId: product._id });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCustomers = async (req, res, next) => {
  try {
    const customers = await user.find({ role: 'user' }).select('-password');
    res.status(200).json(customers);
    next();
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
