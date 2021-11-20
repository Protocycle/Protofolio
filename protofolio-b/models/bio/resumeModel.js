const mongoose = require('mongoose');
const { Schema } = mongoose;

const resumeSchema = new Schema({
  contact: {
    name: String,
    email: String,
    location: String,
    phone: String,
    languages: Array,
    links: Object
  },
  summary: Object,
  title: String,
  subtitles: [Array],
  education: {
    schools: [{
      institution: {type: Schema.Types.String},
      date: {type: Schema.Types.String},
      location: {type: Schema.Types.String},
      distinction: {type: Schema.Types.String},
      gpa: {type: Schema.Types.String},
      degree: {type: Schema.Types.String},
      coursework: {type: Schema.Types.Array},
    }],
    certifications: [{
      institution: {type: Schema.Types.String},
      date: {type: Schema.Types.String},
      degree: {type: Schema.Types.String},
      coursework: {type: Schema.Types.Array},
    }],
    linkedin: Array
  },
  jobs: [
    {
      title: {type: Schema.Types.String},
      date: {type: Schema.Types.String},
      companies: {type: Schema.Types.Array},
      headline: {type: Schema.Types.String},
      description: {type: Schema.Types.String},
      details: {type: Schema.Types.Array},
      timeline: {type: Schema.Types.Array}
    }
  ],
  skills: {
    core: {type: Schema.Types.Array}
  },
  id: Number
});

const resume = mongoose.model('Resume', resumeSchema);

const getResumeById = (id, cb) => {
  resume.findOne({ id: id }, cb);
};

module.exports = {
  getResumeById
}