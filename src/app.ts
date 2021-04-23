import dotenv from 'dotenv';
import express from 'express';
import MasterRouter from './routes/MasterRouter';

// load the environment variables from the .env file
dotenv.config({
    path: '.env'
});

class Server {
    public app = express();
    public router = MasterRouter;
}

const server = new Server();

server.app.use('/api', server.router);

((port = process.env.PORT || 5000) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();