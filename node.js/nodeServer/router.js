var fs = require('fs');
var url = require('url');
var logic = require('./logic')
module.exports = (req,res)=>{
      const method = req.method
    if(method === 'GET'){
      const {query} = url.parse(req.url,true)
      console.log(query)
      if(req.url == '/'){
        logic.index(res)
    }else{
        fs.readFile('./plmm.jpg',function(err,data){
          res.end(data);
      })
    }
    }else if(method === 'POST'){
      // console.log('ppp')
      var data = ''
      req.on('data',function(d){
        data += d
      })
      req.on('end',function(){
      const result =  require('querystring').parse(data)
        logic.user(result,res)
      })
      res.end()
    }
}