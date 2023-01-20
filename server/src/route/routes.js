const express = require('express');
const Router = express.Router();
const userController = require("../Controller/userController")
const pdf = require('html-pdf');


Router.post('/createUser', userController.createUser)




module.exports = Router;