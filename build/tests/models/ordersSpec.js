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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var orders_1 = require("../../models/orders");
var products_1 = require("../../models/products");
var users_1 = require("../../models/users");
describe('Orders_Model', function () {
    var order_id;
    var Products_id;
    //AS A  ORDER STORE :)
    var OS = new orders_1.OrdersStore();
    //AS A  produncts STORE :)
    var PS = new products_1.ProductsStore();
    //AS A  USER STORE :)
    var US = new users_1.UsersStore();
    var uid;
    it('cheak the index methode', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(OS.index).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it('cheak the the show methode', function () {
        expect(OS.show).toBeDefined();
    });
    it('cheak the create methode', function () {
        expect(OS.create).toBeDefined();
    });
    it('cheak the add mehtode', function () {
        expect(OS.AddProducts).toBeDefined();
    });
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, result, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {
                        first_name: 'youssef',
                        last_name: 'nour',
                        password: 'be-aware'
                    };
                    return [4 /*yield*/, US.create(data)];
                case 1:
                    result = _a.sent();
                    uid = result.id;
                    return [4 /*yield*/, PS.create({
                            name: 'chiken',
                            price: 20
                        })];
                case 2:
                    product = _a.sent();
                    Products_id = product.id;
                    return [2 /*return*/];
            }
        });
    }); });
    it('Create Order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var OrderInfo, result, data2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    OrderInfo = {
                        status: 'prep',
                        //@ts-ignore
                        user_id: uid,
                    };
                    return [4 /*yield*/, OS.create(OrderInfo)];
                case 1:
                    result = _a.sent();
                    order_id = result.id;
                    uid = result.user_id;
                    data2 = {
                        id: order_id,
                        status: 'prep',
                        user_id: uid,
                    };
                    expect(result).toEqual(data2);
                    return [2 /*return*/];
            }
        });
    }); });
    //writ the things you want to achive
    //see the ordrs of the user
    it('the orders of this user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, OS.index(uid)];
                case 1:
                    result = _a.sent();
                    console.log(uid);
                    /*
                    for debugging
                   uid =result.id as string
                    console.log(index)
                    */
                    console.log(result);
                    //if we don't add produnct it will be falsy 
                    expect(result).toBeTruthy;
                    return [2 /*return*/];
            }
        });
    }); });
    it('add product to an order', function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, result, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {
                        quanitiy: 5,
                        order_id: order_id,
                        product_id: Products_id,
                    };
                    return [4 /*yield*/, OS.AddProducts(data)];
                case 1:
                    result = _a.sent();
                    id = result.id;
                    order_id = result.order_id;
                    Products_id = result.product_id;
                    expect(result).toEqual({
                        quanitiy: 5,
                        order_id: order_id,
                        product_id: Products_id,
                        id: id
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('spesific order ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {
                        user_id: uid,
                        status: 'prep',
                        id: order_id
                    };
                    return [4 /*yield*/, OS.show(uid, order_id)];
                case 1:
                    result = _a.sent();
                    order_id = result.id;
                    expect(result).toEqual({
                        id: order_id,
                        user_id: uid,
                        status: 'prep'
                    });
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    }); });
});
// I need just to ask why i need to this line 
//watching a video 
//see the sql joins 
//why 
//when you understand what is this line 
//and how to make join between tables you will got it 
