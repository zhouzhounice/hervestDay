const express = require('express');

const router = express.Router();

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
.get('/list',userController.list)
.delete('/',userController.delete)

module.exports = router