import fs from "fs";
import path from "path";
import util from "util";
import rootDir from "../utils/path";

const readFile = util.promisify(fs.readFile);

export const readDataFile = async (fileName: string): Promise<any> => {
  let data = null;
  let fileContent = await readFile(
    path.join(rootDir, "../", "data", fileName + ".json"),
    "utf-8"
  );
  data = JSON.parse(fileContent);
  return data;
};
