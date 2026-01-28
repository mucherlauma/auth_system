# 🔐 Full Stack Authentication System
**Topic:** Authentication, Authorization & Frontend Integration  

## 🎯 Objective
The objective of this project is to:
- Implement secure user authentication using JWT
- Understand authentication vs authorization
- Create protected routes using middleware
- Integrate frontend with backend authentication APIs
- Gain real-world full stack development experience
- Practice clean project structure and GitHub usage

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- bcrypt

### Frontend
- HTML
- CSS
- JavaScript

### Tools
- Postman / Thunder Client
- Git & GitHub
### How to Run the Project
### Clone the Repository
git clone https://github.com/mucherlauma/auth_system.git
cd auth_system

### Backend Setup (Node + Express)
cd backend
npm install
node server.js

### Backend will start at:

http://localhost:5000

### Frontend Setup

Go to the frontend folder

Open index.html in your browser
(Right-click → Open with browser)

### How to Use the App

Register a new user on the login page

Login using the same credentials

JWT token is stored in localStorage

You will be redirected to dashboard.html

Click Logout to clear token and return to login page

### Protected Route Check

Dashboard page is accessible only if JWT token exists
If token is missing or invalid → redirected to login page

