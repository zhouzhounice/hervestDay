const Redis = require('ioredis');
const redis = new Redis();

let num = Math.round(Math.random()*30+1);