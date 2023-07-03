markdown
Copy code

# Axios-goose 🦆

Axios Goose is a lightweight and simple library that wraps around Axios for making HTTP requests to a RESTful API. This library is designed to streamline the process of managing authorization tokens (access tokens and refresh tokens) and offers a convenient interface for making various types of HTTP requests.

# Installation

To install Axios Goose, you can use npm:

```sh
npm install axios-goose

```

# Usage

Below is an example of how to use axios-goose in your project:

## 0. Importing Axios Goose

Import Axios Goose in your project.

```javascript
Copy code
import { Axios } from 'axios-goose';
```

---

## 1. Initializing Axios Goose

Initialize Axios Goose before making any requests.

```ts
const isAuthReq = true; // Set this to true if you are making authorized requests
const axiosInstance = new Axios(isAuthReq);
```

isAuthReq is a boolean that determines whether the requests should contain an Authorization header.

---

## 2. Making HTTP Requests

### GET

To make a simple GET request:

```ts
axiosInstance.get('your-endpoint');
```

To make a GET request with query parameters:

```ts
axiosInstance.getByQuery('your-endpoint', {
  param1: 'value1',
  param2: 'value2',
});
```

To make a GET request with path parameters:

```ts
axiosInstance.getByParams('your-endpoint', 'param-value');
```

### POST

To make a POST request:

```ts
axiosInstance.post('your-endpoint', { dataKey: 'dataValue' });
```

To make a POST request with multipart/form-data:

```ts
const formData = new FormData();
formData.append('key', 'value');
axiosInstance.postMultipartFormData('your-endpoint', formData);
```

### PUT

To make a PUT request:

```ts
axiosInstance.put('your-endpoint', { dataKey: 'dataValue' }, optionalID);
```

### PATCH

To make a PATCH request:

```ts
axiosInstance.patch('your-endpoint', { dataKey: 'dataValue' });
```

###DELETE
To make a DELETE request:

```ts
axiosInstance.delete('your-endpoint', itemID);
```

# Handling Tokens

This library automatically handles access tokens and refresh tokens. Tokens are stored in cookies and are automatically attached to authorized requests. When an access token expires, it attempts to refresh the token using the refresh token.

# Environment Variables

You need to set an environment variable for the base URL of your API:

```json
REACT_APP_API_BASE_ROUTE=<your-api-base-url>
```
