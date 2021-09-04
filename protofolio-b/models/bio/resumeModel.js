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
  headline: String,
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
    bootcamps: [{
      institution: {type: Schema.Types.String},
      date: {type: Schema.Types.String},
      location: {type: Schema.Types.String},
      gpa: {type: Schema.Types.String},
      degree: {type: Schema.Types.String},
      coursework: {type: Schema.Types.Array},
    }]
  },
  jobs: {
    freelance: [{
      entity: {type: Schema.Types.String},
      date: {type: Schema.Types.String},
      position: {type: Schema.Types.String},
      description: {type: Schema.Types.String},
      activities: {type: Schema.Types.Array},
      location: {type: Schema.Types.String},
    }],
    employee: [{
      entity: {type: Schema.Types.String},
      date: {type: Schema.Types.String},
      position: {type: Schema.Types.String},
      description: {type: Schema.Types.String},
      activities: {type: Schema.Types.Array},
      location: {type: Schema.Types.String},
    }]
  },
  skills: {
    technical: {
      languages: {
        programming: {type: Schema.Types.Array},
        web: {type: Schema.Types.Array},
        data: {type: Schema.Types.Array},
      },
      libraries: {type: Schema.Types.Array},
      softwares: {
        platforms: {type: Schema.Types.Array},
        ide: {type: Schema.Types.Array},
      }
    },
    soft: {type: Schema.Types.Array},
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