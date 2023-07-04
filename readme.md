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
import { Axios } from 'axios-goose';
```

---

## 1. Initializing Axios Goose

Initialize Axios Goose before making any requests.

```ts
const isAuthReq = true; // Set this to true if you are making authorized requests
const baseURL = 'https://api.example.com'; // Optionally set the baseURL
const axiosInstance = new Axios(isAuthReq, baseURL);
```

isAuthReq is a boolean that determines whether the requests should contain an Authorization header. You should provide a baseURL which will be used as the base URL for all the HTTP requests made using this axios instance.

---

## 2. Making HTTP Requests

### GET

To make a simple GET request:

```ts
axiosInstance.get('/api/endpoint');
```

To make a GET request with query parameters:

```ts
axiosInstance.getByQuery('/api/endpoint', {
  param1: 'value1',
  param2: 'value2',
});
```

To make a GET request with path parameters:

```ts
axiosInstance.getByParams('/api/endpoint', 'param-value');
```

### POST

To make a POST request:

```ts
axiosInstance.post('/api/endpoint', { dataKey: 'dataValue' });
```

To make a POST request with multipart/form-data:

```ts
const formData = new FormData();
formData.append('key', 'value');
axiosInstance.postMultipartFormData('/api/endpoint', formData);
```

### PUT

To make a PUT request:

```ts
axiosInstance.put('/api/endpoint', { dataKey: 'dataValue' }, optionalID);
```

### PATCH

To make a PATCH request:

```ts
axiosInstance.patch('/api/endpoint', { dataKey: 'dataValue' });
```

### DELETE

To make a DELETE request:

```ts
axiosInstance.delete('/api/endpoint', itemID);
```

# Handling Tokens

This library automatically handles access tokens and refresh tokens. Tokens are stored in cookies and are automatically attached to authorized requests. When an access token expires, it attempts to refresh the token using the refresh token.

> The library expects that the backend responds with a `1002 status code` when the access token is expired.

---

# Token Refresh Endpoint Configuration

In order to enable automatic token refreshing functionality, the backend should provide an endpoint for token refreshing.

> Note that this library uses a fixed path `/api/auth/refresh-token` for token refreshing.

Please ensure that your backend implements an API endpoint at the following path for handling refresh token requests:

```bash
/api/auth/refresh-token
```

This endpoint should accept a POST request with a refresh token, and it should return a new access token if the provided refresh token is valid.

## Backend Endpoint Conifguration:

- HTTP Method: `POST`
- Endpoint URL: `/api/auth/refresh-token`

### Request Body:

```json
{
  "refreshToken": "<your-refresh-token>"
}
```

### Response:

```json
{
  "accessToken": "<your-new-access-token>"
}
```

Please configure your backend service to provide this endpoint with the above specifications to ensure that token refresh works seamlessly with this library.
