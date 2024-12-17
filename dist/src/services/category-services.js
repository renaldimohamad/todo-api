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
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.findById = exports.findAll = void 0;
const db_1 = __importDefault(require("../libs/db"));
const findAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.category.findMany();
});
exports.findAll = findAll;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.category.findUnique({ where: { id } });
});
exports.findById = findById;
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.category.create({ data });
});
exports.createCategory = createCategory;
const updateCategory = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.category.update({
        where: { id },
        data,
    });
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield db_1.default.category.delete({ where: { id } });
});
exports.deleteCategory = deleteCategory;
