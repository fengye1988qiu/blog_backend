'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async users() {
    return this.ctx.model.User.find().sort({ _id: -1 }).exec();
  }
  async create(user) {
    return this.ctx.model.User.create(user);
  }

  async userById(id) {
    return this.ctx.model.User.findById(id);
  }
}
module.exports = UserService;
