'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getList() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    ctx.body = await service.article.getList();
    ctx.status = 200;
    logger.info('End:' + ctx.body);
  }

  async getOne() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    ctx.body = await service.article.getOne(ctx.params.id);
    ctx.status = 200;
    logger.info('End:' + ctx.params.id);
  }

  async create() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    ctx.request.body.createdAt = new Date();
    ctx.body = await service.article.create(ctx.request.body);
    ctx.status = 201;
    logger.info('End:' + ctx.body);
  }

  async update() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.request.body);
    await service.article.update(ctx.params.id, ctx.request.body);
    ctx.body = await service.article.getOne(ctx.params.id);
    ctx.status = 200;
    logger.info('End:' + ctx.body);
  }

  async delete() {
    const { ctx, service, logger } = this;
    logger.info('Start:', ctx.params.id);
    ctx.body = await service.article.delete(ctx.params.id);
    ctx.status = 204;
    logger.info('End:' + ctx.body);
  }
}

module.exports = ArticleController;
