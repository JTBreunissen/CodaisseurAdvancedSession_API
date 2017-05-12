'use strict';

module.exports = function(app) {
  const skills = require('../controllers/skillsController');
  var RateLimit = require('express-rate-limit');

  var limiter = new RateLimit({
    windowMs: 10*60*1000,
    max: 25,
    delayMs: 0
  });

  app.use(limiter);


  // skills Routes
  app.route('/skills')
    .get(skills.index)
    .post(skills.create);


  app.route('/skills/:skillId')
    .get(skills.show)
    .put(skills.update)
    .delete(skills.delete);
};
