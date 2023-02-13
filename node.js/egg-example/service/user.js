const Service = require('egg').Service;
class UserService extends Service {
  getUserList(){
    return [
      {
        id:0,
        userName:'Anne'
      }
    ]
  }
}

module.exports = UserService