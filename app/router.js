'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // router.get('*', controller.home.render);

  router.put('/api/login', controller.login.doLogin);

  router.get('/api/users', controller.user.users);
  router.post('/api/users', controller.user.create);
  router.get('/api/users/:id', controller.user.user);

  router.get('/api/articles', controller.article.getList);
  router.get('/api/articles/:id', controller.article.getOne);
  router.post('/api/articles', controller.article.create);
  router.put('/api/articles/:id', controller.article.update);
  router.delete('/api/articles/:id', controller.article.delete);
};
