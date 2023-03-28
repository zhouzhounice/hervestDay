const mongoose = require('mongoose')
const baseModel = require('./baseModel')
const md5 = require('../utils/md5')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require: true,
        set:value => md5(value),
        select:false
    },
   ...baseModel
})

module.exports = userSchema