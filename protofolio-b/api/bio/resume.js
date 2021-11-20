const resumeRouter = require('express').Router();
const resumeModel = require('../../models/bio/resumeModel');

resumeRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  if (id) {
    resumeModel.getResumeById(id, (err, data) => {
      if (err) {
        console.log("error:", err);
        res.sendStatus(404);
        return;
      }
      res.send(data);
    })
  }
});



module.exports = {
  resumeRouter
};