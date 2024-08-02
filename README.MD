E-Commerce Project (SB Jewelry)

Student Name: Bigem Maharjan
Student Number: 8952906
Date: 2024/07/20

Technology Stack

Frontend: ReactJS
Backend: Node.js with Express
Database: MongoDB (Atlas)

Project Setup

1. Project Initialization: New Repository created on GitHub named "Bigem_FinalProject_Web_Jewelry" and cloned to local machine.

2. Frontend Setup: Initialized ReactJS for creating the client-side part.

3. Backend Setup: Initialized Node.js with express and MongoDB (Atlas) for server-side part.

Database Schema Design

Users Schema (MongoDB)

1. username: String
2. email: String
3. fullName: String
4. address: String
5. phoneNumber: String
6. password: String

Category Schema (MongoDB)

1. categoryName: String
2. categoryImgUrl: String

Products Schema (MongoDB)

1. productName: String
2. description: String
3. price: Number
4. stock: Number
5. imageUrl: String

Cart Schema (MongoDB)

1. productName: String
2. price: Number
3. quantity: Number
4. imageUrl: String

Order Schema (MongoDB)

1. items: [CartSchema]
2. orderDate: Date
3. customer name: String
4. customer address: String
5. customer email: String
6. customer number: String
7. totalAmount: Number
8. paymentMethod: String

Admin Schema (MongoDB)

1. username: String
2. password: String

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

<!-- Testing the backend for now -->
<!--
1. Open Postman and paste the collection that I have attached with the submission file
2. All the api end-points are created. You can first configure the MonogDb Atlas and then try testing those api made for adding, retreiving, updating and deleting products.
3. The changes can be seen in the frontend part as well.

 -->
