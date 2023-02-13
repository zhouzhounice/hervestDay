'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx,app } = this;
    // ctx.body = app.foo;
    // var serviceData = this.service.user.getUserList()
    // console.log(serviceData)
    ctx.body = this.service.UserService
  }
}

module.exports = HomeController;
