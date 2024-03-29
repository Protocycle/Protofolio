const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({
  name: String,
  dob: Date,
  pob: String,
  nationality: String,
  pp: String,
  summary: {
    intro: {type: Schema.Types.Array},
    conclusion: {type: Schema.Types.Array},
    content: {type: Schema.Types.Array},
  },
  id: Number
});

const about = mongoose.model('About', aboutSchema);

const getAboutById = async (id) => {
	try {
  	const data = await about.findOne({ id: id });
		return data;
	}
	
	catch (err) {
		console.log(err);
	}
}

module.exports = {
  getAboutById
}
