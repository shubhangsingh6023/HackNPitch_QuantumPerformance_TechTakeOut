# Techout 

This is a base website aimed at unifying all the major canteens in JU. This app has been developed using Node.js, Express, Passport, Mongoose, EJS, and some other packages. Functionalities of the initial release include login, register, and add to cart features. Payment gateway and Wallet features are still in development.

### Version: 1.0.0

### MongoDB

Open "config/keys.js" and add your MongoDB URI, local or Atlas.


### Usage
Run 

```sh
$ npm install
```
to install all the dependencies.


Run

```sh
$ node productseeder.js
```
to insert all the menu items into the MongoDB database.


Run
```sh
$ node app.js
# Or run with Nodemon
```
and visit
```sh

http://localhost:5000

```
to run the website.
