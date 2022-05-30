"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var produncts_1 = require("../../handlers/produncts");
var express_1 = __importDefault(require("express"));
var valdiate_1 = __importDefault(require("../../middleware/valdiate"));
var routesProducts = (0, express_1.default)();
routesProducts
    .get('/', produncts_1.index)
    .get('/:id', produncts_1.show)
    .post('/', valdiate_1.default, produncts_1.create)
    .delete('/:id', valdiate_1.default, produncts_1.Delete);
exports.default = routesProducts;
