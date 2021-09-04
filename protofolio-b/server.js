if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require('express');
const { apiRouter } = require('./api');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();
const port = process.env.PORT;
const path = require('path');
const db = process.env.PORTFOLIODB;


// mongodb connection
const mongoConnect = () => {
	mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(e => {
  	console.log(`Database connection was successful`);
	}).catch(err => {
  	console.log(`Could not connect to the database - Retrying in 10 seconds`);
		setTimeout(mongoConnect, 10000);
	});
}
mongoConnect();

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
server.use("/assets", express.static(__dirname + "/assets"))

// APIs
server.use('/api', apiRouter);




server.get('/*', (req, res) => {
    // update this path to match how you set up express to serve static and where your build is output to
    res.sendFile(path.join(__dirname, '..', 'protofolio-c', 'build', 'index.html'));
  });


server.listen(port, () => console.log(`Server listening on port ${port}`));
