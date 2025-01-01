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
