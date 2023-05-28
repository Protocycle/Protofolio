const resumeRouter = require('express').Router();
const resumeModel = require('../../models/bio/resumeModel');

resumeRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (id) {
    const data = await resumeModel.getResumeById(id);
    if (data)
			res.send(data);

		else {
      console.log("error at resume.js");
      res.sendStatus(404);
    }
  }
});



module.exports = {
  resumeRouter
};
