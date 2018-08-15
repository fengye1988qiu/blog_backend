'use strict';
const Service = require('egg').Service;
class ArticleService extends Service {
  async getList() {
    return this.ctx.model.Article.find().sort({ _id: -1 }).exec();
  }
  async getOne(id) {
    return this.ctx.model.Article.findById({ _id: id }).exec();
  }
  async create(article) {
    return this.ctx.model.Article.create(article);
  }

  async update(_id, article) {
    return this.ctx.model.Article.findOneAndUpdate({ _id }, article).exec();
  }

  async delete(id) {
    return this.ctx.model.Article.remove({ _id: id }, err => {
      console.log(err);
    });
  }

}
module.exports = ArticleService;
