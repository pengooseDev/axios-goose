"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COOKIE = void 0;
const KEY = Object.freeze({
    ACCESS_TOKEN: 'access-token',
    REFRESH_TOKEN: 'refresh-token',
});
const EXPIRE = Object.freeze({
    ACCESS_TOKEN: 30 * 60 * 1000,
    REFRESH_TOKEN: 14 * 24 * 60 * 60 * 1000,
});
const PATH = Object.freeze({
    WILD_CARD: '/',
});
const CONFIG = Object.freeze({
    DEFAULT: Object.freeze({
        path: PATH.WILD_CARD,
    }),
});
exports.COOKIE = Object.freeze({
    KEY,
    EXPIRE,
    PATH,
    CONFIG,
});