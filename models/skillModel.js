'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;


const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter the name of the skill']
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['beginner', 'intermediate', 'advanced']
    }],
    default: ['beginner']
  }
});

module.exports = mongoose.model('Skills', SkillSchema);
