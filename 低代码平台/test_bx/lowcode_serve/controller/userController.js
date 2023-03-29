const {User} = require('../model')
const {createToken} = require('../utils/jwt')
// 用户注册
module.exports.register = async ctx=>{
    const userModel = new User(ctx.request.body)
    await userModel.save()

}
// 用户登录
module.exports.login = async ctx=>{
    const dbBack = await User.findOne(ctx.request.body)
    console.log(dbBack)
    if(!dbBack){
        return ctx.body = {
            status: {
                code: 400,
                message: "账户名或密码不正确！",
            }
        }
    }
    const token =  await createToken(dbBack._doc)
    dbBack._doc.token = token
    ctx.body = {
        data:{
            ...dbBack._doc
        },
        status: {
            code: 200,
            message: "登录成功！",
        }
    }
}
// module.exports.index = async (ctx,next)=>{
//     var user = await User.findById(ctx.params.userId)
//     ctx.body = user
// }

// 获取用户信息
module.exports.getuser = async (ctx,next)=>{
    console.log(ctx.user)
    ctx.body = ctx.user
}