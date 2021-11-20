const mongoose = require('mongoose');
const { Schema } = mongoose;

const toolsetSchema = new Schema({
  frameworks: [{
    name: {type: Schema.Types.String},
    purpose: {type: Schema.Types.String},
    language: {type: Schema.Types.String},
    type: {type: Schema.Types.String},
    location: {type: Schema.Types.String},
    site: {type: Schema.Types.String},
    logo: {type: Schema.Types.String},
  }],
  libraries: [{
    name: {type: Schema.Types.String},
    purpose: {type: Schema.Types.String},
    language: {type: Schema.Types.String},
    type: {type: Schema.Types.String},
    location: {type: Schema.Types.String},
    site: {type: Schema.Types.String},
    logo: {type: Schema.Types.String},
  }],
  databases: [{
    name: {type: Schema.Types.String},
    purpose: {type: Schema.Types.String},
    language: {type: Schema.Types.String},
    type: {type: Schema.Types.String},
    location: {type: Schema.Types.String},
    site: {type: Schema.Types.String},
    logo: {type: Schema.Types.String},
  }],
  apis: [{
    name: {type: Schema.Types.String},
    purpose: {type: Schema.Types.String},
    language: {type: Schema.Types.String},
    type: {type: Schema.Types.String},
    location: {type: Schema.Types.String},
    site: {type: Schema.Types.String},
    logo: {type: Schema.Types.String},
  }],
  id: Number
});

const toolset = mongoose.model('Toolset', toolsetSchema);

const getToolsetById = (id, cb) => {
  toolset.findOne({ id: id }, cb);
};

module.exports = {
  getToolsetById
}