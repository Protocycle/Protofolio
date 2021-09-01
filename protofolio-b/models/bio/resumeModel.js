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
        schools: Array,
        bootcamps: Array
    },
    jobs: {
        freelance: Array,
        employee: Array
    },
    skills: {
        technical: {
            languages: {
                programming: Array,
                web: Array,
                data: Array
            },
            libraries: Array,
            softwares: {
                platforms: Array,
                ide: Array
            }
        },
        soft: Array
    },
    id: Number
});

const Resume = mongoose.model('Resume', resumeSchema);

const getResumeById = (id, cb) => {
    Resume.findOne({id: id}, cb);
};

module.exports = {
    getResumeById
}