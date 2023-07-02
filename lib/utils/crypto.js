"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = exports.encryptData = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const secretKey = 'my-secret-key';
function encryptData(data) {
    return crypto_js_1.default.AES.encrypt(JSON.stringify(data), secretKey).toString();
}
exports.encryptData = encryptData;
function decryptData(encryptedData) {
    const bytes = crypto_js_1.default.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(crypto_js_1.default.enc.Utf8));
}
exports.decryptData = decryptData;
