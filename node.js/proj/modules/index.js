const geekitme = require('./lib')

geekitme.addListener('newLesson',(res)=>{
  if(res.price < 80){
    console.log('buy！',res)
  }
  console.log('yeah ！',res)
})