"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("./routes/admin"));
// const shopRoutes = require("./src/routes/shop.ts");
// const customerRoutes = require("./src/routes/customer.ts");
const app = express_1.default();
app.use(admin_1.default);
// app.use(shopRoutes);
// app.use(customerRoutes);
exports.default = app;
//# sourceMappingURL=app.js.map