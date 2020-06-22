const products = [];
const getAddProduct = (req, res, next) => {
  res.render("add-product");
};
const addProduct = (req, res, next) => {
  products.push({ title: req.body.product, description: req.body.description });
  res.redirect("/products");
};

exports.getAddProduct = getAddProduct;
exports.addProduct = addProduct;
exports.products = products;
