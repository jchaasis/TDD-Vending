const express = require('express');
const bodyparser = require('body-parser');

// import routes
const routes = require('./routes');

//create server
const server = express();

//establish routes
routes(server);

server.listen(3000);
