# basic-auth

[demployment](https://emran-basic-auth.herokuapp.com/)

[Pull Request](https://github.com/emranaloul/basic-auth/pull/1)

[Actions](https://github.com/emranaloul/basic-auth/actions)

[Repo](https://github.com/emranaloul/basic-auth)


## About 
A REST Express API, has various endpoints that using to sigup or sign in by username and password
<hr>

## Author
Emran Aloul
<hr>

## Links

* [Pull Request](https://github.com/emranaloul/basic-auth/pull/1)
* [demployment](https://emran-basic-auth.herokuapp.com/)
* [Actions](https://github.com/emranaloul/basic-auth/actions)
* [Repo](https://github.com/emranaloul/basic-auth)
<hr>

## Setup
1. `(.env)` file 

```
PORT=6000
MANGOOSE_URI=mongodb+srv://emran:Ltuc@1234@cluster0.32b6w.mongodb.net/auth
MONGOOSE_TEST_URI=mongodb+srv://emran:Ltuc@1234@cluster0.32b6w.mongodb.net/test

```
2. Install the following dependencies

```
npm init -y 
npm i cors dotenv express morgan mongoose
npm i -D jest supertest
npm i @code-fellows/supergoose 
mongod --dbpath=/Users/path/to/data/db

```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## signup

  ### *  `/signup`

<br>

- **Method** : post 
- **CRUD Operation** : Create / Add username and password
- **Response Body**   : JSON

```
{
    "_id": "60aad367288af8560e1836af",
    "username": "sameer",
    "password": "$2b$10$O/lBLiL/rQX3HR/TtUW5FOX4XANrU4YbmENxXFRy/ey0TQG4AMnku",
    "__v": 0
}

```
   ## sigin
  ### * `/signin`
<br>

- **Method** : post 
- **CRUD Operation** : signin to exist user
- **Response Body**  : JSON

```
{
    "_id": "60aa8018fab6792ca70a801a",
    "username": "emran",
    "password": "$2b$10$4HjDK20tVPvUcrisx8b0qu1PGhiw9BgK99d.TrI1pX3KPLHJvzm9i",
    "__v": 0
}

```

4. Test . 
* There's 2 test files . basic-auth.test.js
* In terminal run :

```
npm test

```
<br><br><br>
<hr>
<br><br>

## UML Diagram
![basic-auth](basic-auth.png)


