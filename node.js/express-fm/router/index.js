const express = require('express');

const router = express.Router();

router.get('/router1',(req,res)=>{
  console.log(req.method)
  res.send('/router1')
})
router.get('/router2',(req,res)=>{
  console.log(req.method)
  res.send('/router2')
})

module.exports = router