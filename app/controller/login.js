'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async doLogin() {
    const { ctx } = this;
    const { name, password } = this.ctx.request.body;
    if (name && password) {
      // const user = this.service.user.
      ctx.status = 201;
    } else {
      this.ctx.body = {
        errorMsg: 'Invalid Username or Password, pls try again.',
      };
      ctx.status = 400;
    }
  }
}

module.exports = LoginController;
