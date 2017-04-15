import express from 'express';
import cookieParser from 'cookie-parser';
import apicache from 'apicache';
import bodyParser from 'body-parser';
import allowCrossDomain from './middleware/allowCrossDomain';
import allowMethods from './middleware/allowMethods';
import email from './middleware/email';
import mountStoreApi from './middleware/store';
import serversConfig from '../config';

const server = global.server = express();
//apicache.options({ debug: true })
let cache = apicache.middleware;

// Register Node.js middleware
server.use(allowCrossDomain);
server.use(allowMethods);

server.use(cookieParser());
server.get('/api/products/', cache('2 weeks'));
server.get('/api/categories/', cache('2 weeks'));
server.get('/api/product/', cache('2 weeks'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

mountStoreApi(server);

// Launch the server
server.listen(serversConfig.api.PORT, () => {
    console.log(`The API server is running at port ${serversConfig.api.PORT}`);
});
