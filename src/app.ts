import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db';
import MasterRouter from './routes/MasterRouter';

dotenv.config({
    path: '.env'
});


export class Server {
    // constructor(public name: string) {
    //     console.log('Server built');
    // }

    public app = express();
    public router = MasterRouter;
}

interface IServer {
    name: string;
}

const server = new Server();
server.app.use(express.json());
connectDB;

server.app.use('/', server.router);


((port = process.env.PORT || 4040) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();