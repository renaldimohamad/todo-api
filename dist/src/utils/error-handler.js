"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = errorHandler;
const ERROR_CODE_1 = __importDefault(require("./constans/ERROR_CODE"));
const ERROR_MESSAGE_1 = __importDefault(require("./constans/ERROR_MESSAGE"));
function errorHandler(res, err) {
    let message = err.message;
    res.status(ERROR_CODE_1.default[message] || 500).json({
        error: ERROR_MESSAGE_1.default[message] || message,
    });
}
