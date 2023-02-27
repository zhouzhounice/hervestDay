'use strict';
import  Command from '@anne.cn/command';
import {log} from '@anne.cn/utils';
class InitCommand extends Command {
  get command() {
    return 'init [name]'
  }
  
  get description() {
    return 'init project'
  }
  
  get options() {
    return [
        ['-f, --force, 是否强制更新',false],
        ['-vv, --vvvv, 是否强制更新',false],
    ]
  }
  
  action([name,opts]){
    log.success('init',name,opts)
    // console.log(name,opts)
  }
  
  preAction(){
    console.log("pre")
  }
  
  postAction(){
    console.log("post")
  }
}
function Init(instance){
  return new InitCommand(instance)
}
export default Init;

