# Bigem_FinalProject_Web_Jewelry
This is the final project of web technologies. 

**E-Commerce Project (SB Jewelry)**

Student Name: Bigem Maharjan
Student Number: 8952906
Date: 2024/07/20

**Technology Stack**

Frontend: ReactJS
Backend: Node.js with Express
Database: MongoDB (Atlas)

**Project Setup**

1. Project Initialization: New Repository created on GitHub named "Bigem_FinalProject_Web_Jewelry" and cloned to local machine.

2. Frontend Setup: Initialized ReactJS for creating the client-side part.

3. Backend Setup: Initialized Node.js with express and MongoDB (Atlas) for server-side part.

**Database Schema Design**

**Users Schema (MongoDB)**

1. username: String
2. email: String
3. fullName: String
4. address: String
5. phoneNumber: String
6. password: String

**Category Schema (MongoDB)**

1. categoryName: String
2. categoryImgUrl: String

**Products Schema (MongoDB)**

1. productName: String
2. description: String
3. price: Number
4. stock: Number
5. imageUrl: String

**Cart Schema (MongoDB)**

1. productName: String
2. price: Number
3. quantity: Number
4. imageUrl: String

**Order Schema (MongoDB)**

1. items: [CartSchema]
2. orderDate: Date
3. customerName: String
4. customerAddress: String
5. customerEmail: String
6. customerNumber: String
7. totalAmount: Number
8. paymentMethod: String

**Admin Schema (MongoDB)**

1. username: String
2. password: String

**Frontend Setup**

1. Use of React Js.

**Backend Setup**

1. Use of Node.js
2. Use of MongoDB (Atlas)

**Notes**

1. The project is set up using Git and GiHub for version control.
2. I have created two folder one for the frontend part named "sb_jewelry" and next for the backend part named "sb_jewelery_backend"
