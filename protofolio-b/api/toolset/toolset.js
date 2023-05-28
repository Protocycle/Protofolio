const toolsetRouter = require('express').Router();
const toolsetModel = require('../../models/toolset/toolsetModel');

toolsetRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (id) {
    const data = await toolsetModel.getToolsetById(id);

    if (data)
			res.send(data);

		else {
      console.log("error at toolset.js");
      res.sendStatus(404);
      return;
    }  
	}
});



module.exports = {
  toolsetRouter
};
