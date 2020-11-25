/* 
    Load .env File
*/
import dotenv from 'dotenv';
dotenv.config();

import { Server } from './server';

/*
 * Initiate Server
 */
let server = new Server();

server.start();
