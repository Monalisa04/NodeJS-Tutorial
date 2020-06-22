const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const es6Renderer = require("express-es6-template-engine");

const rootDir = require("./utils/path.js");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/products.js");

const app = express();

// Templating
app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");

// Route for public folder
app.use(express.static(rootDir + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes for adding product and product details
app.use(adminRoutes);
// Route for shop
app.use(shopRoutes);
// Route for root
app.use("/", (req, res) => {
  res.sendFile(path.join(rootDir, "./", "index.html"));
});
// Other routes - return 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
