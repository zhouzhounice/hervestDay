'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = this.app.foo;
  }
}

module.exports = HomeController;
