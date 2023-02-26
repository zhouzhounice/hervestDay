const log = require('./log');
if(process.argv.includes('--debug') || process.argv.includes('-d')){
  log.level = 'verbose'
}else {
  log.level = 'info'
}
// log.heading = "anne";
log.addLevel('success',2000,{ fg:'green',bold:true})
module.exports = {
  log,
}
