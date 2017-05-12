'use strict';

module.exports = function(app) {
  const skills = require('../controllers/skillsController');


  // skills Routes
  app.route('/skills')
    .get(skills.index)
    .post(skills.create);


  app.route('/skills/:skillId')
    .get(skills.show)
    .put(skills.update)
    .delete(skills.delete);
};
