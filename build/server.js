"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var server_1 = __importDefault(require("./routes/server"));
var app = (0, express_1.default)();
var address = 7000;
app.use(body_parser_1.default.json());
app.use('/', server_1.default);
app.listen(7000, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
