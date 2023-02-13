'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.foo = 'Hello,egg!'
  const { router, controller } = app;
  router.get('/', controller.home.index);
};
