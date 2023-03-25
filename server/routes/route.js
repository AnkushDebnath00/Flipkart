import express from "express";
import { userSignup, userLogin } from "../controller/userController.js";
import getProducts, {
  getProductsById,
} from "../controller/productController.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);

router.get("/product/:_id", getProductsById);
export default router;
