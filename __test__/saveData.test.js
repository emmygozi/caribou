"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
var supertest_1 = __importDefault(require("supertest"));
var index_1 = __importDefault(require("../src/index"));
exports.request = (0, supertest_1.default)(index_1.default);
describe("setup test", function () {
    it("should", function (done) {
        expect(typeof exports.request).toBe("object");
        done();
    });
});
