import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db';
// import AuthRoutes from './routes/AuthRoutes'
import MasterRouter from './routes/MasterRouter';
// const connectDB = require('./config/db');

dotenv.config({
    path: '.env'
});

class Server {

    public app = express();
    public router = MasterRouter;
}

const server = new Server();
server.app.use(express.json());
connectDB;

server.app.use('/api', server.router);


((port = process.env.PORT || 4040) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
