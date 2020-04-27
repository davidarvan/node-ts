import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import logger from './util/logger';
import * as routeHome from './routes/home';


// Create Express server
const app = express();
const PORT = process.env.PORT || 8080;

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));


// Poo favicon in default location, to encourage replacement
app.use('/favicon.ico', express.static(path.join(__dirname, 'public/favicon.ico')));


// Routes
app.get('/', routeHome.index);


// Start Express server.
const server = app.listen(PORT, () => {
  logger.debug(`App is running at http://localhost:${PORT} in ${app.get('env')} mode`);
  logger.debug('Press CTRL-C to stop\n');
});


export default server;
