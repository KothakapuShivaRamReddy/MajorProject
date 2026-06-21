# WanderLust - Travel Listing Platform

WanderLust is a full-stack web application that allows users to explore, create, edit, and manage travel property listings. The project is built using Node.js, Express.js, MongoDB, EJS, and Passport.js for authentication.

## Features

- User Registration and Login
- Secure Authentication using Passport.js
- Create New Listings
- View All Listings
- View Listing Details
- Edit Existing Listings
- Delete Listings
- Session Management
- Flash Messages for User Feedback
- Server-Side Validation using Joi
- MongoDB Database Integration
- Responsive User Interface with EJS Templates

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- EJS
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local Strategy
- Passport Local Mongoose

### Other Tools
- Joi
- Express Session
- Connect Flash
- Method Override
- Dotenv
- EJS Mate

## Project Structure

```
MajorProject
│
├── models
├── routes
├── views
├── public
├── Utils
├── app.js
├── package.json
└── .env
```

## Installation

### Clone the Repository

```bash
git clone <your-github-repository-link>
cd MajorProject
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=your_mongodb_connection_string
```

### Run the Application

```bash
node app.js
```

or

```bash
npm start
```

### Open in Browser

```text
http://localhost:8080/listings
```

## Functionalities

### User Authentication
- Register a new account
- Login securely
- Session-based authentication
- Logout functionality

### Listing Management
- Add travel listings
- View listing details
- Update listing information
- Delete listings

### Validation
- Form validation using Joi
- Error handling with custom middleware

## Learning Outcomes

Through this project, I gained practical experience in:

- RESTful Routing
- MVC Architecture
- Authentication and Authorization
- MongoDB Database Operations
- Express Middleware
- Session Handling
- Server-Side Validation
- Full Stack Web Development

## Future Improvements

- Image Upload with Cloudinary
- User Profile Management
- Search and Filter Listings
- Reviews and Ratings
- Booking Functionality
- Payment Gateway Integration
- Responsive Mobile Design

## Author

Shiva Ram Reddy

GitHub:
https://github.com/KothakapuShivaRamReddy
