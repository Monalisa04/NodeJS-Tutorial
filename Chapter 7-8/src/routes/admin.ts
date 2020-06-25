import * as express from "express";

const router = express.Router();
import productsAccess from "../model/products";

router.get("/products", (req, res) => {
  productsAccess.getAllProducts().then(function (data) {
    res.send(data);
  });
});
router.post("/add-product", (req, res) => {});
router.post("/add-category", (req, res) => {});

export default router;
