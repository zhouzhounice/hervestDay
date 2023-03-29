const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const tojwt = promisify(jwt.sign)
const verify = promisify(jwt.verify)


//生成token
module.exports.createToken = async userInfo=>{
  const token = await tojwt({userInfo},'lowCode', {expiresIn:60*60*72})
    return token
}

// 验证token
module.exports.verifyToken = (required = true)=>{
  return async (ctx,next) =>{
    let token = ctx.headers.authorization
    token = token?token.split("Bearer ")[1] : null;
    if(token){
      try {
      const userInfo =  await verify(token,'lowCode')
        ctx.user = userInfo
        await next()
      }catch (error) {
        ctx.body = {
          status:{
            code:402,
            message:"token验证失败!"
          }
        }
      }
    }else if(required){
      ctx.body = {
        status:{
          code:402,
          message:"无效的token!"
        }
      }
    }else {
      await next()
    }
  }
}