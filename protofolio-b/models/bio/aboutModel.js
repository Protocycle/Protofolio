const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({
    name: String,
    dob: Date,
    pob: String,
    nationality: String,
    pp: String,
    summary: {
        intro: Array,
        conclusion: Array,
        content: Array        
    },
    id: Number
});

const About = mongoose.model('About', aboutSchema);

const getAboutById = (id, cb) => {
    About.findOne({id: id}, cb);
};

module.exports = {
    getAboutById
}