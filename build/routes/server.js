"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import to all handlers 
var express_1 = require("express");
var userROUTES_1 = __importDefault(require("./users/userROUTES"));
var produnctsROUTES_1 = __importDefault(require("./products/produnctsROUTES"));
var ordersRoutes_1 = __importDefault(require("./orders/ordersRoutes"));
var dahboard_1 = __importDefault(require("./dahboard/dahboard"));
var route = (0, express_1.Router)();
route.get('/', function (req, res) {
    res.send('i will start now');
});
route.use('/users', userROUTES_1.default);
route.use('/products', produnctsROUTES_1.default);
route.use('/orders', ordersRoutes_1.default);
route.use('/orderdProducts', dahboard_1.default);
exports.default = route;
