import * as path from "path";
import rootDir from "../utils/path";
import { readDataFile } from "../utils/file-handler";

class Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  images: Array<string>;
  thumbnail: string;
  category: any;
  reviews: Array<any>; // This needs to be changed to Review
  averageRating: {
    value: number;
    count: number;
  };
  price: {
    value: number;
    currency: string;
  };
  constructor(name: string) {
    this.name = name;
  }
  static getAllProducts = async () => {
    let data = await readDataFile("products");
    return data;
  };
}

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

export default Product;
