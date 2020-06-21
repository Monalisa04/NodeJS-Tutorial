const path = require("path");
const express = require("express");

const rootDir = require("../utils/path.js");
const adminData = require("./admin.js");

const router = express.Router();

router.get("/shop", (req, res, next) => {
  console.log("Products :: ", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop", { locals: { products: adminData.products } });
});

module.exports = router;
