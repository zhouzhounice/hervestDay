const jwt = require("jsonwebtoken");
const {promisify} = require('util');

const { uuid } = require('../config/config.default');
const toJWT = promisify(jwt.sign);

const verfiy = promisify(jwt.verify);
// const res = jwt.sign({
//   foo:'hello',
// },"555")

// console.log(res);

// const jwts = jwt.verify(
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTY3NTEyOTA3Mn0.sUAYkg4ym0gmT02ILhmF5p93fYadfUl3jbo6yFXDYvo'
//   ,'555')

//   console.log(jwts)

module.exports.createToken = async userInfo =>{
 return await toJWT({userInfo},
    uuid,
    {
      expiresIn:60 * 60 * 24
    }
    )
}

module.exports.verifyToken = async (req,res,next) =>{ 
  // console.log(req.headers)
  let token = req.headers.authorization
  token = token ? token.split("Bearer ")[1] : null;
  // console.log(token)
  if(!token){
    res.status(402).json({error:"请传入token"})
  }
  try{
  let userInfo = await verfiy(token,uuid);
  req.user = userInfo
    next()
  } catch(error) {
    res.status(402).json({error:'无效的token'})
  }
}