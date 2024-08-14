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
2. I have created two folder one for the frontend part named "frontend_sb_jewelry" and next for the backend part named "backend_sb_jewelery"

<!-- How to start my project -->
<!--
## Instructions to set up the project
1. Clone the repository or download the whole project from GitHub or the extract the zip file.

2. Navigate to the project directory.

3. You will see two folders. Run `npm install` in each folder to install dependencies - This installs all the dependencies in the package.json or the dependencies I have installed in the project. {If incase the problem arises in backend part please remove the bcrypt from the dependencies in package.json and run npm install then run npm install bcrypt again. This must help setup the backend project.}

4. Change the MongoDB Atlas connection string with your own.

5. I have setup the nodemon so you can Run `nodemon index.js` or `node index.js` to start the backend server named "backend_sb_jewellers".

6. You can Run `npm start` to start the frontend server named "frontend_sb_jewellers".
-->

<!-- The admin can only register the other admin once he/she is logged in. Admin can perform CRUD operation in product and category after login -->

<!-- Login Credentials -->
<!-- Email: bigem@gmail.com -->
<!-- Password: bigem123 -->

<!-- Testing Documentation -->

Test Case 1: Add Product
Purpose: Verify that a admin can add a product.
Steps:

1. Login
2. Go to product
3. Click on add product button
4. Fill the form
5. Submit

Test Case 2: Add Category
Purpose: Verify that a admin can add a category.
Steps:

1. Login
2. Go to category
3. Click on add category button
4. Fill the form
5. Submit

Test Case 3: Update Product
Purpose: Verify that a admin can update a product.
Steps:

1. Login
2. Go to product
3. Click on update button that is declared in product list
4. Form will be filled so make changes
5. Submit

Test Case 4: Update Category
Purpose: Verify that a admin can Update a category.
Steps:

1. Login
2. Go to category
3. Click on Update button that is declared in product list
4. Form will be filled so make changes
5. Submit

Test Case 5:
Purpose: See whether you can add to cart or not
Steps:

1. Run the project
2. Go to product
3. Click on the product, it will navigate to product detail
4. Click on add to cart button
5. You can increase or decrease the quantity as you want.

Test Case 6:
Purpose: See whether you can order or not which will navigate you to checkout form and once submit the order summary is shown
Steps:

1. Follow the Test Case 5.
2. Now click on the order now button.
3. Checkout form will be shown so fill out the form.
4. Click on the place order button
5. Order summary with user details and other information will be displayed.

Test Case 7:
Purpose: Register
Steps:

1. Login.
2. Nagivate to Register section
3. Fill all the empty form as it is required
4. Click on submit button.
5. As it gets pass alert message will be shown.
6. Logout
7. Login with the credentials you just registered.

Test Case 8:
Purpose: Change of the navbar
Steps:

1. Check the header once the project run.
2. Login with the right credentials.
3. Once logged in reload the page.
4. The navbar will be changed which is designed for the login admin.

Test Case 9:
Purpose: Delete product
Steps:

1. Login
2. Go to product
3. Click on delete button that is declared in product list
4. Changes will be seen instantly.

Test Case 10:
Purpose: Delete category
Steps:

1. Login
2. Go to category
3. Click on delete button that is declared in category list
4. Changes will be seen instantly.
