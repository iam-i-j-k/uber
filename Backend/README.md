# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be a JSON object containing the following fields:

```json
{
  "fullname": {
    "firstname": "string (min length: 3, required)",
    "lastname": "string (min length: 3, optional)"
  },
  "email": "string (min length: 5, required)",
  "password": "string (min length: 6, required)"
}
```

### Responses:

#### Success (201):
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": "string"
  }
}
```

#### Validation Error (400):
```json
{
  "errors": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
```

### Example Request:
```bash
curl -X POST http://localhost:5000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body:
The request body should be a JSON object containing the following fields:

```json
{
  "email": "string (required)",
  "password": "string (required)"
}
```

### Responses:

#### Success (200):
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": "string"
  }
}
```

#### Validation Error (400):
```json
{
  "errors": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
```

#### Invalid Credentials (401):
```json
{
  "error": "Invalid credentials"
}
```

### Example Request:
```bash
curl -X POST http://localhost:5000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the logged-in user. It requires a valid authentication token.

### Responses:

#### Success (200):
```json
{
  "_id": "string",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "socketId": "string"
}
```

#### Unauthorized (401):
```json
{
  "error": "Unauthorized"
}
```

### Example Request:
```bash
curl -X GET http://localhost:5000/users/profile \
-H "Authorization: Bearer <token>"
```

### Example Response:
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the logged-in user. It requires a valid authentication token.

### Responses:

#### Success (200):
```json
{
  "message": "Logged out successfully"
}
```

#### Unauthorized (401):
```json
{
  "error": "Unauthorized"
}
```

### Example Request:
```bash
curl -X GET http://localhost:5000/users/logout \
-H "Authorization: Bearer <token>"
```

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```
