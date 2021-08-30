const express = require('express');
const { apiRouter } = require('./api');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();
const port = 9000;
const path = require('path');
const db = "protofolio";

// mongoose connection
mongoose.connect(`mongodb://localhost:27017/${db}`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(e => {
  console.log(`Connected to database '${db}'`);
}).catch(err => {
  console.log(`Could not connect to database '${db}'`);
});

// request parsers
server.use(express.urlencoded({
  extended: true
}));
server.use(express.json());

// cross-origin
corsOptions = {
  origin: "*"
}

server.use(cors(corsOptions));

// react serve
server.use(express.static("../protofolio-c/build"));

// APIs
server.use('/api', apiRouter);





server.get('/', (req, res) => {
    // update this path to match how you set up express to serve static and where your build is output to
    res.send(res.sendFile(path.join(__dirname, '..', 'protofolio-c', 'build', 'index.html')));
  });



server.listen(port, () => console.log(`Express running at http://localhost:${port}`));