const { body } = require('express-validator');
const validate = require("./errorBack");
const {User} = require("../../model/index");

// 注册时的校验
module.exports.videoValidate = validate([
  body('title')
    .notEmpty().withMessage('视频名不能为空').bail()
    .isLength({ min: 3 }).withMessage('视频名长度不能大于20'),
  body('vodvideoId')
    .notEmpty().withMessage('vodvideoId不能为空').bail(),
  body('phone')
    .notEmpty().withMessage('手机号不能为空').bail()
    .custom(async val => {
      const phoneValidate = await User.findOne({ phone: val });
      if (phoneValidate) {
        return Promise.reject("手机号已被注册")
      }
    }).bail()
])