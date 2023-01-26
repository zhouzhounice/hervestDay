var fs = require('fs')
module.exports = {
  index(res){
    fs.readFile('./index.html','utf-8',function(err,data){
          res.write(data);
          res.end();
      })
  },
  user(postData,res){
      console.log(postData)
      // console.log(res)
  }
}