"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_handler_1 = require("../utils/file-handler");
class Product {
    constructor(name) {
        this.name = name;
    }
}
Product.getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield file_handler_1.readDataFile("products");
    return data;
});
/*
exports.getProduct = (productId: number) => {
  return fs.readFile(
    path.join(rootDir, "src", "data", "products.json"),
    "json",
    (err: any, data: any): Product => {
      if (err) {
        return null;
      }
      console.log(data);
      return null;
    }
  );
};
*/
exports.default = Product;
//# sourceMappingURL=products.js.map