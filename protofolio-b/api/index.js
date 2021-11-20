const apiRouter = require('express').Router();
const { pokeRouter } = require('./poke_rps/pokerps');
const { bioRouter } = require('./bio');
const { toolsetRouter } = require('./toolset/toolset');

apiRouter.use('/pokerps', pokeRouter);
apiRouter.use('/bio', bioRouter);
apiRouter.use('/toolset', toolsetRouter);

module.exports = {
  apiRouter
};