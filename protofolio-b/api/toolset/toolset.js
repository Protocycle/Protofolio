const toolsetRouter = require('express').Router();
const toolsetModel = require('../../models/toolset/toolsetModel');

toolsetRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  if (id) {
    toolsetModel.getToolsetById(id, (err, data) => {
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
  toolsetRouter
};