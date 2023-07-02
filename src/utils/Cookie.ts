import {
  getterNameProps,
  getterReturn,
  cookieParts,
  setterNameProps,
  setterValueProps,
  setterOptionProps,
  setterReturn,
} from 'types';

export class Cookie {
  get(name: getterNameProps): getterReturn {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`) as cookieParts;

    if (parts.length === 2) {
      const poppedPart = parts.pop();

      if (!poppedPart) return null;

      const result = poppedPart.split(';').shift();

      if (!result) return null;

      return result;
    }

    return null;
  }

  set(
    name: setterNameProps,
    value: setterValueProps,
    options: setterOptionProps = {}
  ): setterReturn {
    let newCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
      newCookie += '; ' + optionKey;
      let optionValue = options[optionKey];

      if (optionValue !== true) newCookie += '=' + optionValue;
    }

    document.cookie = newCookie;
  }
}
