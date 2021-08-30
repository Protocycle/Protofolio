const bioRouter = require('express').Router();
const { aboutRouter } = require('./about');
const { resumeRouter } = require('./resume')

bioRouter.use('/about', aboutRouter);
bioRouter.use('/resume', resumeRouter);


module.exports = {
    bioRouter
};