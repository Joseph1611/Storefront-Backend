"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serviece_1 = require("../../service/serviece");
var store = new serviece_1.DashboardStore();
describe('DahboardService', function () {
    it('sould has mehode ', function () {
        expect(store.orderedProducts).toBeDefined();
    });
});
