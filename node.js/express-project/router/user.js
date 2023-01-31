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
.put('/',verifyToken,validator.update,userController.update)
.delete('/',userController.delete)

module.exports = router