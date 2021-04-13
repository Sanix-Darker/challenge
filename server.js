require('dotenv').config();

// Essential imports
import * as path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import cors from 'cors';
import logger from './utils/logger';
import fs from 'fs';

// We import our routes
import homeRoute from './routes/home.route'
import convertRoute from './routes/convert.route'


const app = express();
const port = process.env.SERVER_PORT;
const server = http.createServer(app);
const router = express.Router();


fs.writeFileSync("./public/tmp", "10");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// suscribe routes
homeRoute(router);
convertRoute(router);

app.use(router);

server.listen(port, () => {
	logger.info('JoliMoi service started - ', port);
});
