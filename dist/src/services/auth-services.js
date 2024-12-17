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
exports.register = exports.login = void 0;
const db_1 = __importDefault(require("../libs/db"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ERROR_LIST_1 = __importDefault(require("../utils/constans/ERROR_LIST"));
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield db_1.default.user.findFirst({
        where: {
            email: email,
        },
    });
    if (!existUser) {
        throw new Error(ERROR_LIST_1.default.AUTH_NOT_FOUND);
    }
    const isMatch = yield bcrypt_1.default.compare(password, existUser.password);
    if (!isMatch) {
        throw new Error(ERROR_LIST_1.default.AUTH_NOT_FOUND);
    }
    const tokent = jsonwebtoken_1.default.sign(existUser, process.env.SECRET_KEY || "secret", {
        expiresIn: "1d",
    });
    return tokent;
});
exports.login = login;
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const existUser = yield db_1.default.user.findFirst({
        where: {
            OR: [
                {
                    email: user.email,
                    userName: user.userName,
                },
            ],
        },
    });
    if (existUser) {
        throw new Error("User already exist");
    }
    const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
    user.password = hashedPassword;
    const newUser = yield db_1.default.user.create({
        data: user,
    });
    return newUser;
});
exports.register = register;
