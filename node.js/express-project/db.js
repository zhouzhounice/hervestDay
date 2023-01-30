const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

exports.getDb = async()=>{
  let data = await readFile('./db.json','utf8');
  return JSON.parse(data)
}

exports.addserveDb = async (data) =>{
 return  writeFile('./db.json',JSON.stringify(data))
}