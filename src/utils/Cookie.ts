import {
  getterNameProps,
  getterReturn,
  setterNameProps,
  setterValueProps,
  setterOptionProps,
  setterReturn,
} from 'types';

export class Cookie {
  get(name: getterNameProps): getterReturn {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');

      if (decodeURIComponent(cookieName) === name)
        return decodeURIComponent(cookieValue);
    }

    return null;
  }

  set(
    name: setterNameProps,
    value: setterValueProps,
    options: setterOptionProps = {}
  ): setterReturn {
    let newCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.expires)
      if (Object.prototype.toString.call(options.expires) === '[object Date]')
        newCookie += `expires=${options.expires.toUTCString()};`;

    if (options.path) newCookie += `path=${options.path};`;

    if (options.domain) newCookie += `domain=${options.domain};`;

    if (options.secure) newCookie += `secure;`;

    if (options.sameSite) newCookie += `SameSite=${options.sameSite};`;

    document.cookie = newCookie;
  }
}
