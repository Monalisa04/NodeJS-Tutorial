const express = require("express");
const router = express.Router();

const products = require("../controllers/products.js")

router.get("/products", products.getProducts);

module.exports = router;
