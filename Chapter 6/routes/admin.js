const path = require("path");
const express = require("express");
const rootDir = require("../utils/path.js");
const router = express.Router();

const products = [];
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  products.push({ title: req.body.product, description: req.body.description });
  res.redirect("/shop");
});

exports.routes = router;
exports.products = products;
