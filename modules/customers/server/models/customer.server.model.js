'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  /*name: {
    type: String,
    default: '',
    required: 'Please fill Customer name',
    trim: true
  }, */
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  firstname: {
    type: String,
    default: '',
    trim: true
  },
  suburb: {
    type: String,
    default: '',
    trim: true
  },
  surname: {
    type: String,
    default: '',
    trim: true
  },
  country: {
    type: String,
    default: '',
    trim: true
  },
  industry: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    trim: true
  },
  referred: {
    type: Boolean
  },
  channel: {
    type: String,
    default: '',
    trim: true
  }
});

mongoose.model('Customer', CustomerSchema);
