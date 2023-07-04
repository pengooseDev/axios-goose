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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Axios_instances, _Axios_instance, _Axios_auth, _Axios_cookie, _Axios_setInterceptor, _Axios_reqMiddleWare, _Axios_setAuthReq, _Axios_reqOnError, _Axios_resMiddleWare, _Axios_resOnError, _Axios_getNewToken;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("utils");
const constants_1 = require("constants/");
class Axios {
    /**
     * @param {boolean} isAuthReq
     */
    constructor(isAuthReq = false, baseURL = '') {
        _Axios_instances.add(this);
        _Axios_instance.set(this, void 0);
        _Axios_auth.set(this, void 0);
        _Axios_cookie.set(this, void 0);
        __classPrivateFieldSet(this, _Axios_instance, axios_1.default.create({
            baseURL: baseURL,
        }), "f");
        __classPrivateFieldSet(this, _Axios_auth, isAuthReq, "f");
        __classPrivateFieldSet(this, _Axios_cookie, new utils_1.Cookie(), "f");
        __classPrivateFieldGet(this, _Axios_instances, "m", _Axios_setInterceptor).call(this);
    }
    /**
     * @param {string} endPoint
     */
    get(endPoint) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.GET,
            url: endPoint,
        });
    }
    /**
     * @param {string} endPoint
     * @param {string} query
     */
    getByQuery(endPoint, query) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.GET,
            url: endPoint,
            params: Object.assign({}, query),
        });
    }
    /**
     * @param {string} endPoint
     * @param {string} query
     */
    getByParams(endPoint, params) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.GET,
            url: `${endPoint}/${params}`,
        });
    }
    /**
     * @param {string} endPoint
     * @param {object} data
     */
    post(endPoint, data) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.POST,
            url: `${endPoint}`,
            data,
        });
    }
    /**
     * @param {string} endPoint
     * @param {any} data
     */
    postMultipartFormData(endPoint, data) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: 'POST',
            url: `${endPoint}`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data,
        });
    }
    /**
     * @param {string} endPoint
     * @param {number} id
     * @param {object} data
     */
    put(endPoint, data, id = undefined) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.PUT,
            url: !!id || id === '' || id === 0 ? `${endPoint}/${id}` : endPoint,
            data,
        });
    }
    /**
     * @param {string} endPoint
     * @param {object} data
     */
    patch(endPoint, data = {}) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.PATCH,
            url: endPoint,
            data,
        });
    }
    /**
     *
     */
    putFormData(endPoint, data) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.PUT,
            url: `${endPoint}`,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data,
        });
    }
    /**
     * @param {string} endPoint
     * @param {number} id
     */
    delete(endPoint, id) {
        return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, {
            method: constants_1.METHOD.DELETE,
            url: `${endPoint}/${id}`,
        });
    }
}
exports.Axios = Axios;
_Axios_instance = new WeakMap(), _Axios_auth = new WeakMap(), _Axios_cookie = new WeakMap(), _Axios_instances = new WeakSet(), _Axios_setInterceptor = function _Axios_setInterceptor() {
    __classPrivateFieldGet(this, _Axios_instance, "f").interceptors.request.use(__classPrivateFieldGet(this, _Axios_instances, "m", _Axios_reqMiddleWare).bind(this), __classPrivateFieldGet(this, _Axios_instances, "m", _Axios_reqOnError).bind(this));
    __classPrivateFieldGet(this, _Axios_instance, "f").interceptors.response.use(__classPrivateFieldGet(this, _Axios_instances, "m", _Axios_resMiddleWare).bind(this), __classPrivateFieldGet(this, _Axios_instances, "m", _Axios_resOnError).bind(this));
}, _Axios_reqMiddleWare = function _Axios_reqMiddleWare(config) {
    let newConfig = config;
    if (__classPrivateFieldGet(this, _Axios_auth, "f"))
        newConfig = __classPrivateFieldGet(this, _Axios_instances, "m", _Axios_setAuthReq).call(this, newConfig);
    return newConfig;
}, _Axios_setAuthReq = function _Axios_setAuthReq(config) {
    var _a;
    const { headers } = config;
    const newConfig = Object.assign(Object.assign({}, config), { headers: Object.assign(Object.assign({}, headers), { Authorization: `${(_a = __classPrivateFieldGet(this, _Axios_cookie, "f")
                .get(constants_1.COOKIE.KEY.ACCESS_TOKEN)) === null || _a === void 0 ? void 0 : _a.replace('%', ' ')}` }) });
    return newConfig;
}, _Axios_reqOnError = function _Axios_reqOnError(error) {
    return Promise.reject(error);
}, _Axios_resMiddleWare = function _Axios_resMiddleWare(res) {
    const { authorization, refreshtoken } = res.headers;
    const validUntil = new Date();
    validUntil.setTime(new Date().getTime() + constants_1.COOKIE.EXPIRE.ACCESS_TOKEN);
    if (authorization) {
        __classPrivateFieldGet(this, _Axios_cookie, "f").set(constants_1.COOKIE.KEY.ACCESS_TOKEN, authorization, Object.assign(Object.assign({}, constants_1.COOKIE.CONFIG.DEFAULT), { expires: validUntil }));
    }
    if (refreshtoken) {
        const validUntil = new Date();
        validUntil.setTime(new Date().getTime() + constants_1.COOKIE.EXPIRE.REFRESH_TOKEN);
        __classPrivateFieldGet(this, _Axios_cookie, "f").set(constants_1.COOKIE.KEY.REFRESH_TOKEN, refreshtoken, Object.assign(Object.assign({}, constants_1.COOKIE.CONFIG.DEFAULT), { expires: validUntil }));
    }
    return res;
}, _Axios_resOnError = function _Axios_resOnError(error) {
    if (error.response && (error === null || error === void 0 ? void 0 : error.response.status) === constants_1.STATUS_CODE.TOKEN.EXPIRE)
        return __classPrivateFieldGet(this, _Axios_instances, "m", _Axios_getNewToken).call(this, error.config);
    return Promise.reject(error);
}, _Axios_getNewToken = function _Axios_getNewToken(config) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield __classPrivateFieldGet(this, _Axios_instance, "f").post(constants_1.COOKIE.API_PATH.GET_NEW_ACCESS_TOKEN, {
                refreshToken: __classPrivateFieldGet(this, _Axios_cookie, "f").get(constants_1.COOKIE.KEY.REFRESH_TOKEN),
            });
            const validUntil = new Date();
            validUntil.setTime(new Date().getTime() + constants_1.COOKIE.EXPIRE.REFRESH_TOKEN);
            const { data: { accessToken }, } = response;
            if (accessToken) {
                __classPrivateFieldGet(this, _Axios_cookie, "f").set(constants_1.COOKIE.KEY.ACCESS_TOKEN, accessToken, Object.assign(Object.assign({}, constants_1.COOKIE.CONFIG.DEFAULT), { expires: validUntil }));
            }
            const { headers } = config;
            const newConfig = Object.assign(Object.assign({}, config), { headers: Object.assign(Object.assign({}, headers), { Authorization: `${(_a = __classPrivateFieldGet(this, _Axios_cookie, "f")
                        .get(constants_1.COOKIE.KEY.ACCESS_TOKEN)) === null || _a === void 0 ? void 0 : _a.replace('%', ' ')}` }) });
            return __classPrivateFieldGet(this, _Axios_instance, "f").call(this, newConfig);
        }
        catch (error) {
            return Promise.reject(error);
        }
    });
};
