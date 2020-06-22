const express = require("express");
const router = express.Router();

const admin = require("../controllers/admin.js");

router.get("/add-product", admin.getAddProduct);
router.post("/product", admin.addProduct);

module.exports = router;
