const Router = require('@koa/router')
const router =  new Router({
    prefix: '/api'
})
const userController = require('../controller/userController')
const {registerValidate,loginValidate} = require("../middleware/userValdate")
const {verifyToken} = require('../utils/jwt')

// router.get('/user/:userId',userController.index)
router.post('/user/register',registerValidate,userController.register)
router.post('/user/login',loginValidate,userController.login)
router.get('/user/getuser',verifyToken(true),userController.getuser)

module.exports = router