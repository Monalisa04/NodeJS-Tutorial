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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDataFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const path_2 = __importDefault(require("../utils/path"));
const readFile = util_1.default.promisify(fs_1.default.readFile);
exports.readDataFile = (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    let data = null;
    let fileContent = yield readFile(path_1.default.join(path_2.default, "../", "data", fileName + ".json"), "utf-8");
    data = JSON.parse(fileContent);
    return data;
});
//# sourceMappingURL=file-handler.js.map