const jwt = require("jsonwebtoken");

const res = jwt.sign({
  foo:'hello',
},"555")

console.log(res);

const jwts = jwt.verify(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTY3NTEyOTA3Mn0.sUAYkg4ym0gmT02ILhmF5p93fYadfUl3jbo6yFXDYvo'
  ,'555')

  console.log(jwts)