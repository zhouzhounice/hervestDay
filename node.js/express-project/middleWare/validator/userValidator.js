const { body } = require('express-validator');
const validate = require("./errorBack");

module.exports.register =validate([
  body('userName')
    .notEmpty().withMessage('用户名不能为空').bail()
    .isLength({ min: 3 }).withMessage('用户名不能小于三个字符'),
  body('email')
    .notEmpty().withMessage('邮箱不能为空').bail()
    .isEmail().withMessage('邮箱格式不正确')
])