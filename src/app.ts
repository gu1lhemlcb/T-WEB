import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db';
import MasterRouter from './routes/MasterRouter';

dotenv.config({
    path: '.env'
});


export class Server {

    public app = express();
    public router = MasterRouter;

    public startServer() {
        this.app.use(express.json());
        connectDB;
        server.app.use('/', server.router);
    };
}

const server = new Server();
server.startServer();
((port = process.env.PORT || 4040) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();