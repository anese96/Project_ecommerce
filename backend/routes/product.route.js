import express from "express";
import Product from "../models/product.model.js";
import mongoose, { get } from "mongoose";
import { getProducts, creatProduct, updateProduct,deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get('/hello', getProducts);
router.post('/',creatProduct );
router.put('/:id',updateProduct);
//console.log(process.env.MONGO_URL);
router.delete('/:id', deleteProduct);


export default router;