import {
  getterProps,
  getterReturn,
  cookieParts,
  setterProps,
  setterReturn,
} from 'types';

export class Cookie {
  get(name: getterProps): getterReturn {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`) as cookieParts;

    if (parts.length === 2) return parts.pop().split(';').shift();

    return null;
  }

  set({ name, value, options = {} }: setterProps): setterReturn {
    let newCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
      newCookie += '; ' + optionKey;
      let optionValue = options[optionKey];

      if (optionValue !== true) newCookie += '=' + optionValue;
    }

    document.cookie = newCookie;
  }
}

export default Cookie;
