
# Digital Guest Onboarding System

## Overview

The Digital Guest Onboarding System is a web-based solution designed to help manage guest check-ins and hotel bookings. The system allows hotel administrators to onboard guests easily, provide essential guest details, and generate QR codes for access.

The project consists of two parts:
1. **Backend** - Built using Node.js, Express.js, and MongoDB (Mongoose).
2. **Frontend** - Built using React, Vite, and TailwindCSS for a responsive design.

## Table of Contents

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Seeding Data](#seeding-data)
- [Technologies](#technologies)
- [License](#license)

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/anandspaces/digital-guest-onboarding.git
   cd backend
   ```

## Backend Setup

### Prerequisites
Make sure you have Node.js and MongoDB installed.


2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add the following environment variable:
   ```env
   MONGO_URI=mongodb://localhost:27017/digital-guest-onboarding
   PORT=5000
   JWT_SECRET=7d1da9ecb4dd6c0e3abb2291552854c8bb62da563a1d20e191284ceda021970d
   ```

4. **Run the backend server**:
   ```bash
   npm start
   ```

   This will start the Express.js server on `http://localhost:5000`.

## Frontend Setup

### Prerequisites
Ensure you have Node.js installed.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the frontend application**:
   ```bash
   npm run dev
   ```

   This will start the Vite development server, typically on `http://localhost:3000`.

## Running the Application

1. Make sure both the backend and frontend servers are running.
2. Visit `http://localhost:3000` in your browser to access the frontend interface.
3. The backend API is accessible at `http://localhost:5000/api`.

## Seeding Data

To seed the initial data for the backend, run the following command:

```bash
npm run seed
```

This will seed the hotels and guest data into the MongoDB database. Make sure the MongoDB server is running before running the seed command.

## Technologies

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - JWT Authentication
  - Bcryptjs for password hashing
  - QR Code generation

- **Frontend**:
  - React
  - Vite
  - TailwindCSS
  - React Router
