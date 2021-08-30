const apiRouter = require('express').Router();
const { pokeRouter } = require('./poke_rps/pokerps');
const { bioRouter } = require('./bio');

apiRouter.use('/pokerps', pokeRouter);
apiRouter.use('/bio', bioRouter);


module.exports = {
    apiRouter
};