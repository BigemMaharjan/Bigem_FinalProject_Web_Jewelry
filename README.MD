E-Commerce Project (SB Jewelry)

Student Name: Bigem Maharjan
Student Number: 8952906
Date: 2024/08/09

Technology Stack

Frontend: ReactJS
Backend: Node.js with Express
Database: MongoDB (Atlas)

Project Setup

1. Project Initialization: New Repository created on GitHub named "Bigem_FinalProject_Web_Jewelry" and cloned to local machine.

2. Frontend Setup: Initialized ReactJS for creating the client-side part.

3. Backend Setup: Initialized Node.js with express and MongoDB (Atlas) for server-side part.

Database Schema Design

Users Schema (MongoDB) (Registration and Login) (For Admin and User)

1. name: String
2. email: String
3. password: String
4. isAdmin: Boolean

Category Schema (MongoDB)

1. categoryName: String
2. categoryDesc: STring
3. imageUrl: String

Products Schema (MongoDB)

1. name: String
2. price: Number
3. description: Number
4. quanity: Number
5. imageUrl: String
6. category: objectId

Frontend Setup

1. Use of React Js.

Backend Setup

1. Use of Node.js
2. Use of MongoDB (Atlas)

Notes

1. The project is set up using Git and GiHub for version control.
2. I have created two folder one for the frontend part named "sb_jewelry" and next for the backend part named "sb_jewelery_backend"

<!-- How to start my project -->
<!--
## Instructions to set up the project
1. Clone the repository.

2. Navigate to the project directory.

3. You will see two folders. Run `npm install` in each folder to install dependencies - This installs all the dependencies in the package.json or the dependencies I have installed in the project.

4. Change the MongoDB Atlas connection string with your own.

5. I have setup the nodemon so you can Run `nodemon index.js` or `node index.js` to start the backend server named "backend_sb_jewellers".

6. You can Run `npm start` to start the frontend server named "frontend_sb_jewellers".
-->

<!-- The admin can only register the other admin once he/she is logged in. Admin can perform CRUD operation in product and category after login -->

<!-- Login Credentials -->
<!-- Email: bigem@gmail.com -->
<!-- Password: bigem123 -->
