# Air Ticket Booking

This is a backend for a `Air Ticket booking system` that allows users to book flights for their desired destinations.

# Tech Stack Used

- Node.js
- Express.js
- MongoDB

# Package to install

```
npm i express nodemon jsonwebtoken bcrypt mongoose dotenv
```

# To start the server

```
npm run start
```

# API end points

#### User Registration
Endpoint:`POST /api/register` Allows users to register.

- Request Body:

```
{
  "name": "shashank",
  "email": "s@gmail.com",
  "password": "1234"
}
```
- Response:

Status Code: `201 Created`
```
{
  "message": "User registered successfully"
}
```
### User Login
Endpoint: `POST /api/login` Allows users to login.

Request Body:
```
{
  "email": "s@gmail.com",
  "password": "1234"
}
```
Response:

Status Code: `200 OK`
```
{
  "message": "Login successful"
}
```
### Get All Flights
Endpoint: `GET /api/flights` Returns a list of all available flights.
Status Code: `200 OK`

### Get Flight by ID
Endpoint: `GET /api/flights/:id` Returns the details of a specific flight identified by its ID.
Status Code: `200 OK`

### Add a New Flight
Endpoint:`POST /api/flights` Allows users to add new flights to the system.

Request Body:
```
{
  "airline": "Airline Name",
  "flightNo": "FL123",
  "departure": "Origin Airport",
  "arrival": "Destination Airport",
  "departureTime": "2023-06-01T10:00:00Z",
  "arrivalTime": "2023-06-01T12:00:00Z",
  "seats": 100,
  "price": 200.50
}
```
Response:

Status Code: `201 Created`
```
{
  "message": "Flight added successfully"
}
```
### Update Flight by ID
Endpoint: PUT `/api/flights/:id` Allows users to update the details of a specific flight identified by its ID.

Request Body:

```
{
  "airline": "New Airline Name",
  "departureTime": "2023-06-01T11:00:00Z",
  "seats": 80
}
```
Status Code: `204 No Content`
```
{
    error:"failed to update flight"
}
```
### Delete Flight by ID
Endpoint: DELETE `/api/flights/:id` Allows users to delete a specific flight identified by its ID.
Status Code: `202 `
Body:
```
{
  "message": "Flight deleted successfully"
}
```
### Book a Flight
Endpoint: POST `/api/booking`  Allows the user to book flights.

Request Body:
```
{
  "userId": "user-id",
  "flightId": "flight-id"
}
```
Response:

Status Code: `201 `
Body:
```
{
  message:"flight booked successfully"
}
```

