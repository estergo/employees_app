# Employees app

This app is used for managing employees.
You are able to view list of all employees, remove employee and add a new employee.

# Setup environment

## Node.js

Ensure you have installed node.js version >= 8.0.0 by running:

 `node -v`

 If not you shoud download it from: https://nodejs.org/en/download/.

## MongoDB

You should have installed and running mongoDB server.
follow the instructions here:
https://docs.mongodb.com/manual/installation

## Setup local installations

Open a command line in the root folder of this app and run

`npm i`.

this may take a several minutes. 

## Import basic data

In order to see data in the app, you can import the employees.json file form the root folder of the project into the app DB.
1. open mongoDB installation directory:
    `cd C:\Program Files\MongoDB\Server\4.2\bin` - this path can be different according to your OS and mongo version
2. paste employees.json file 
3. Import the data into the DB by running the command:
    `mongoimport --jsonArray -d employees -c employees employees.json`
    20 documents should be imported

# Run employees app

Run command (from the project root path):
`npm start`

Now, the app is running on `http://localhost:3000`.

Enjoy :)
 
