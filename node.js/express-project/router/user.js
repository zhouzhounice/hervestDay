const express = require('express');

const router = express.Router();

const userController = require("../controller/userController");

router
.post('/register',userController.register)
.get('/list',userController.list)
.delete('/',userController.delete)

module.exports = router