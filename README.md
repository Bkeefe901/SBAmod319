# SBA Module 319: MongoDB Database Application
 
This project is a database for an online t-shirt store. It has 3 collections: Users, Sales, and Shirts. User data consists of username and password. Shirt data consists of a name, size, color, material and price. Finally Sales data consists of a date (date of purchase), items (like a shopping cart validated to display only mongoIDs of the shirts), total, and userID (validated to match a mongoID from one of the users). To run the application clone it down and create a .env file with the variable mongoURI = to your mongoDB connection string and make sure to attach 'shirtShop' to the end of it. Also create another variable in your .env like this:  'PORT = 3000/'. Install all dependencies with: npm i (in your console). To seed your data base I have created /seed routes in each route folder. All you need to do is start your database connection with: npm run dev (in your console). Next uncomment out each seed route in each route folder. Next, in you browser type the following urls in, one at time and load them:
1. localhost:3000/api/users/seed
2. localhost:3000/api/shirts/seed
3. localhost:3000/api/sales/seed

Check in between each url to make sure that that data collection has been loaded to your mongoDB.

Once you have sucessfully loaded them you can play around with the databases with the following table of routes using the Postman or Thunderclient extensions in VScode:

