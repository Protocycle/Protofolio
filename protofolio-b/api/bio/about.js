const aboutRouter = require('express').Router();
const aboutModel = require('../../models/bio/aboutModel');

aboutRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  if (id) {
    const data = await aboutModel.getAboutById(id);
    
		if (data)
			res.send(data);
		
		else {
        console.log("error at about.js when fetching from db");
        res.sendStatus(404);
        return;
    }
	}
 });



module.exports = {
  aboutRouter
};
