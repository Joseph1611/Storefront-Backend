"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../../handlers/user");
var express_1 = __importDefault(require("express"));
var valdiate_1 = __importDefault(require("../../middleware/valdiate"));
var routesUsers = (0, express_1.default)();
routesUsers
    .get('/', valdiate_1.default, user_1.index)
    .post('/', user_1.create)
    .get('/:id', valdiate_1.default, user_1.show)
    .delete('/:id', valdiate_1.default, user_1.Delete);
exports.default = routesUsers;
