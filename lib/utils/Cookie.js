"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookie = void 0;
class Cookie {
    get(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            const poppedPart = parts.pop();
            if (!poppedPart)
                return null;
            const result = poppedPart.split(';').shift();
            if (!result)
                return null;
            return result;
        }
        return null;
    }
    set(name, value, options = {}) {
        let newCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        for (let optionKey in options) {
            newCookie += '; ' + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true)
                newCookie += '=' + optionValue;
        }
        document.cookie = newCookie;
    }
}
exports.Cookie = Cookie;
