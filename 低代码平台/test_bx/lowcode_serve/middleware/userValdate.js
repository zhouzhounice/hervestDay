const Joi = require('joi');
const {User} = require('../model/index')
module.exports.registerValidate =async (ctx,next) =>{
    const schema = Joi.object({
        username:Joi.string().required(),
        password:Joi.string().min(6).required()
    }).validate(ctx.request.body)
    const usernameValidate = await User.findOne({username:ctx.request.body.username})
    if(schema.error){
        ctx.body = {
            status: {
                code: 400,
                message: schema.error.details[0].message,
            }
        }
        return
    }else if(usernameValidate){
        ctx.body = {
            status: {
                code: 400,
                message: "用户名已存在，请重新输入！",
            }
        }
        return
    }
        const {value} = schema
        ctx.body = {
            data:{
                ...value
            },
            status: {
                code: 200,
                message: "注册成功！",
            }
        }
        await next()
}

module.exports.loginValidate =async (ctx,next) =>{
    const schema = Joi.object({
        username:Joi.string().required(),
        password:Joi.string().min(6).required()
    }).validate(ctx.request.body)
    const usernameValidate = await User.findOne({username:ctx.request.body.username})
    if(schema.error){
        ctx.body = {
            status: {
                code: 400,
                message: schema.error.details[0].message,
            }
        }
        return
    }else if(!usernameValidate){
        ctx.body = {
            status: {
                code: 400,
                message: "用户名未注册，请先注册！",
            }
        }
        return
    }

    await next()
}
