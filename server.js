const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  dbUrl = process.env.DATABASE_URL || 'mongodb://localhost/meDb',
  Skill = require('./models/skillModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

app.use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());

// Set up routes for skills
const skillsRoutes = require('./routes/skillsRoutes');
skillsRoutes(app);

// 404 Fallback
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('My RESTful API server started on: ' + port);
