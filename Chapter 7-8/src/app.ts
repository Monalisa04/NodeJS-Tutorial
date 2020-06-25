
import express from "express";
import rootDir from "./utils/path";
import adminRoutes from "./routes/admin";
// const shopRoutes = require("./src/routes/shop.ts");
// const customerRoutes = require("./src/routes/customer.ts");
const app = express();
app.use(adminRoutes);
// app.use(shopRoutes);
// app.use(customerRoutes);

export default app;
