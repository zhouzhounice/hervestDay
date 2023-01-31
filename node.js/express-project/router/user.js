const express = require('express');

const router = express.Router();
const {verifyToken} = require('../util/jwt');

const validator = require("../middleWare/validator/userValidator");
const userController = require("../controller/userController");

router
.post('/register',
validator.register,
userController.register)
.post('/logins',
validator.login,
userController.login
)
.get('/list',verifyToken,userController.list)
.delete('/',userController.delete)

module.exports = router