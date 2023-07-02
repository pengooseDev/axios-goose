"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _AxiosGooose_instance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosGooose = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosGooose {
    constructor(config) {
        _AxiosGooose_instance.set(this, void 0);
        __classPrivateFieldSet(this, _AxiosGooose_instance, axios_1.default.create(Object.assign({}, config)), "f");
    }
}
exports.AxiosGooose = AxiosGooose;
_AxiosGooose_instance = new WeakMap();
