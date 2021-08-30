const aboutRouter = require('express').Router();
const aboutModel = require('../../models/bio/aboutModel');

aboutRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id) {
        aboutModel.getAboutById(id, (err, data) => {
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
    aboutRouter
};