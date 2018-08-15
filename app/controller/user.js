'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async users() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    ctx.body = await service.user.users();
    ctx.status = 200;
    logger.info('End:' + ctx.body);
  }

  async create() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    ctx.body = await service.user.create(ctx.request.body);
    ctx.status = 201;
    logger.info('End:' + ctx.body);
  }

  async user() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    ctx.body = await service.user.userById(ctx.params.id);
    ctx.status = 200;
    logger.info('End:' + ctx.params.id);
  }
}

module.exports = UserController;
