"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("./auth-route"));
const todo_routes_1 = __importDefault(require("./todo-routes"));
const category_routes_1 = __importDefault(require("./category-routes"));
const post_route_1 = __importDefault(require("./post-route"));
const router = (0, express_1.Router)();
router.use("/auth", auth_route_1.default);
router.use("/posts", post_route_1.default);
router.use("/todos", todo_routes_1.default);
router.use("/categories", category_routes_1.default);
exports.default = router;
