'use strict';

const mongoose = require('mongoose');
const Skill = mongoose.model('Skills');

exports.index = function(req, res) {
  console.log(req.query.created_at, req.params, req.search)
  Skill.find(req.query.created_at, function(err, skill) {
    if (err) res.status(422).send('No records founds');
    res.json(skill);
  });
};

exports.create = function(req, res) {
  const new_skill = new Skill(req.body);
  new_skill.save(function(err, skill) {
    if (err) res.status(422).send('Please enter a valid skill name');
    res.json(skill);
  });
};

exports.show = function(req, res) {
  Skill.findById(req.params.skillId, function(err, skill) {
    if (err) res.status(422).send('Record not found');
    res.json(skill);
  });
};

exports.update = function(req, res) {
  Skill.findOneAndUpdate(req.params.skillId, req.body, {new: true}, function(err, skill) {
    if (err) res.status(422).send('Update not successful');
    res.json(skill);
  });
};

exports.delete = function(req, res) {
  Skill.remove({
    _id: req.params.skillId
  }, function(err, skill) {
    if (err) res.status(422).send('Record not deleted');
    res.json({ message: 'skill successfully deleted' });
  });
};
