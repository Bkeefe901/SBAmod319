# SBA Module 319: MongoDB Database Application
 
This project is a database for an online t-shirt store. It has 3 collections: Users, Sales, and Shirts. User data consists of username, email and password (password doesn't show on read routes). Shirt data consists of a name, size, color, material and price. Finally Sales data consists of a date (date of purchase), items (like a shopping cart validated to display only mongoIDs of the shirts), total, and userID (validated to match a mongoID from one of the users). To run the application clone it down and create a .env file with the variable mongoURI = to your mongoDB connection string and make sure to attach 'shirtShop' to the end of it. Also create another variable in your .env like this:  'PORT = 3000/'. Install all dependencies with: npm i (in your console). To seed your data base I have created /seed routes in each route file. All you need to do is start your database connection with: npm run dev (in your console). Next uncomment out each seed route in each route file. Next, in you browser type the following urls in, one at time and load them:
1. localhost:3000/api/users/seed
2. localhost:3000/api/shirts/seed
3. localhost:3000/api/sales/seed

Check in between each url to make sure that that data collection has been loaded to your mongoDB.

Once you have sucessfully loaded them you can play around with the databases with the following table of routes using the Postman or Thunderclient extensions in VScode:
(Don't forget to check validation rules for post and put methods in the Schema files in the models folder)

| Method | Route | Description |
|--------|--------|--------|
| GET | localhost:3000/api/sales | Returns all sales data |
| POST | localhost:3000/api/sales | Adds your newly created sales document to the db |
| GET | localhost:3000/api/sales/:id | Returns a single sales document matching the id you pass in |
| PUT | localhost:3000/api/sales/:id | Corrects whatever data you want for the sales doc that matches the id passed in the url |
| DELETE | localhost:3000/api/sales/:id | Deletes the doc that matcheds the id you pass in |
| GET | localhost:3000/api/shirts | Returns all shirts data |
| POST | localhost:3000/api/shirts | Adds your newly created shirt document to the db |
| GET | localhost:3000/api/shirts/:id | Returns a single shirts document matching the id you pass in |
| PUT | localhost:3000/api/shirts/:id | Corrects whatever data you want for the shirts doc that matches the id passed in the url |
| DELETE | localhost:3000/api/shirts/:id | Deletes the doc that matcheds the id you pass in |
| GET | localhost:3000/api/users | Returns all users data |
| POST | localhost:3000/api/users | Adds your newly created users document to the db |
| GET | localhost:3000/api/users/:id | Returns a single users document matching the id you pass in |
| PUT | localhost:3000/api/users/:id | Corrects whatever data you want for the users doc that matches the id passed in the url |
| DELETE | localhost:3000/api/users/:id | Deletes the doc that matcheds the id you pass in |
| GET | localhost:3000/api/users/email | Returns only the emails of all users (from the index created in the userSchema) |