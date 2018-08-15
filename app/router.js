'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // router.get('*', controller.home.render);

  router.put('/login', controller.login.doLogin);

  router.get('/users', controller.user.users);
  router.post('/users', controller.user.create);
  router.get('/users/:id', controller.user.user);

  router.get('/articles', controller.article.getList);
  router.get('/articles/:id', controller.article.getOne);
  router.post('/articles', controller.article.create);
  router.put('/articles/:id', controller.article.update);
  router.delete('/articles/:id', controller.article.delete);
};
