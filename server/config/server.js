const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const setJobRoutes = require('src/routes/jobRoutes');

/**
 * Express server initialization
 */
const server = express();

/**
 * Application configuration
 * enable all cors requests
 * todo: https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin
 */
server.use(cors());
server.use(bodyParser.json());

/**
 * Base route
 */
server.get('/', (req, res) => res.sendStatus(200));

/**
 * Application routes
 * todo: secure routes
 */
setJobRoutes(server);

module.exports = server;
