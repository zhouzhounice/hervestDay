const express = require('express');
const multer = require("multer");

const router = express.Router();
const {verifyToken} = require('../util/jwt');

const validator = require("../middleWare/validator/userValidator");
const userController = require("../controller/userController");

const upload = multer({dest:'public/'})

router
.post('/register',
validator.register,
userController.register)
.post('/logins',
validator.login,
userController.login
)
.get('/getuser/:userId',verifyToken(false),userController.getuser)
.get('/subscribe/:userId',verifyToken(),userController.subscribe)
.get('/unsubscribe/:userId',verifyToken(),userController.unsubscribe)
.get('/getsubscribe/:userId', userController.getsubscribe)
  .get('/getchannel/:userId', verifyToken(), userController.getchannel)
.get('/list',verifyToken(),userController.list)
.put('/',verifyToken(),validator.update,userController.update)
.post('/headimg',verifyToken(),upload.single('headimg'),userController.headImg)
.delete('/',userController.delete)

module.exports = router