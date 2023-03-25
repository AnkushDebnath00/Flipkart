import express from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import getProducts from // getProductsById,
"../controller/productController.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);

// router.get("/product/:id", getProductsById);
export default router;
