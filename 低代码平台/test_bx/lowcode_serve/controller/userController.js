const {User} = require('../model')

// 用户注册
module.exports.register = async ctx=>{
    const userModel = new User(ctx.request.body)
    await userModel.save()

}
// 用户登录
module.exports.login = async ctx=>{
    const userModel = new User(ctx.request.body)
    await userModel.save()

}
module.exports.index = async (ctx,next)=>{
    var user = await User.findById(ctx.params.userId)
    ctx.body = user
}