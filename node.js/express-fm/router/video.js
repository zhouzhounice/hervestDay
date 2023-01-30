const express = require('express');

const router = express.Router();

router.get('/list',(req,res)=>{
  console.log(req.method);
  // JSON.parse('(')
  res.send('/video-list')
})
router.get('/router2',(req,res)=>{
  console.log(req.method)
  res.send('/router2')
})

module.exports = router