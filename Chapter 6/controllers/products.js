const adminData = require("../controllers/admin.js");
const getProducts = (req, res, next) => {
  console.log(adminData.products);
  res.render("products", { locals: { products: adminData.products } });
};

exports.getProducts = getProducts;
