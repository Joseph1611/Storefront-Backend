"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var orders_1 = require("../../handlers/orders");
var express_1 = require("express");
var userAuthnticat_1 = __importDefault(require("../../middleware/userAuthnticat"));
var orderRouter = (0, express_1.Router)();
orderRouter
    .get('/', userAuthnticat_1.default, orders_1.index)
    .post('/', userAuthnticat_1.default, orders_1.create)
    .get('/:id', userAuthnticat_1.default, orders_1.show)
    .post('/:id/product', userAuthnticat_1.default, orders_1.addProduct);
exports.default = orderRouter;
