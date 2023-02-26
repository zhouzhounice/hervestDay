#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const dedent = require('dedent')
// console.log(hideBin(process.argv))
const arg = hideBin(process.argv);
const cli = yargs(arg);

cli
.usage('Usage:fivst-cli-anne [command] <options>')
.demandCommand(1)
.alias("h","help")
.alias("v","version")
.strict()
.recommendCommands()
.fail((err)=>{
  console.log(err)
})
.wrap(cli.terminalWidth())
.options({
  debug:{
    type:'boolean',
    describe:'Bootstrap debug mode',
    alias:'d'
  }
})
.option('registry',{
  type:'string',
  describe:'Define global registry',
  alias:'r'
})
  .group(['debug'],'Dev options:')
  .group(['registry'],'Extra options:')
.epilogue(dedent`   Welcome!
Your own footer description!
`)  // 非严格模式可以识别简写h
.command('init [name]','Do init a project',(yargs)=>{
  yargs
    .option('name',{
      type:'string',
      describe:'Name of a project',
      alias:'n'
    });
},
(argv) =>{
  console.log(argv)
}
)

.argv;