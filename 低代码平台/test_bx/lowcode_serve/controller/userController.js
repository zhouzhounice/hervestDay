const {User} = require('../model')
module.exports.index = async (ctx,next)=>{
    var user = await User.findById(ctx.params.userId)
    ctx.body = user
}