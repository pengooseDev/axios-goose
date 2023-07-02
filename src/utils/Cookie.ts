class Cookie {
  getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  setCookie(name, value, options = {}) {
    let updatedCookie =
      encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }
}

export default Cookie;
