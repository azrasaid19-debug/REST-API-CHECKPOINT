# 🚀 REST API Checkpoint (Node.js + Express + Mongoose)

## 📌 Description

This project is a simple REST API built with _Node.js, **Express, and **Mongoose_.  
It connects to _MongoDB Atlas_ and performs CRUD operations on users.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Postman (for testing)

---

## 📁 Project Structure

project/
│
├── config/
│ └── .env
│
├── models/
│ └── User.js
│
├── server.js
├── package.json
├── .gitignore
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies

bash
npm install

2️⃣ Create .env File (inside config folder)

MONGO_URI=your_mongodb_connection_string
PORT=5000

3️⃣ Run the Server

node server.js

⸻

🔐 Why .env is in .gitignore

The .env file contains private database credentials.
It is ignored to protect sensitive information and follow real-world security practices.

.gitignore includes:

node_modules
config/.env

⸻

📡 API Routes

GET — Get All Users

GET /users

POST — Add New User

POST /users

Example Body (JSON):

{
"name": "Mayra",
"email": "mayra@email.com",
"age": 23
}

PUT — Update User by ID

PUT /users/:id

DELETE — Delete User by ID

DELETE /users/:id

⸻

🧪 Testing

All routes were tested using Postman:

http://localhost:5000/users

⸻

✅ Features Implemented

✔ Express Server Created
✔ MongoDB Connected with Mongoose
✔ User Schema Created
✔ CRUD Operations Working
✔ Environment Variables Configured
✔ API Tested with Postman

⸻

📌 Conclusion

This project demonstrates how to build a secure REST API using Express and Mongoose while following proper backend structure and environment management.
