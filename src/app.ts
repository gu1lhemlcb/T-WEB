import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose'
import MasterRouter from './routes/MasterRouter';
// const connectDB = require('./config/db');

// load the environment variables from the .env file
dotenv.config({
    path: '.env'
});

class Server {

    public app = express();
    public router = MasterRouter;
}

const server = new Server();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://guilhem:ct2m6G5KTI1y4wx8@cluster0.lqp9x.mongodb.net/EpicRoadTripDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
        })
        console.log("Successfully connected to the database :')");
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
};
connectDB();

server.app.use('/api', server.router);

((port = process.env.PORT || 4040) => {
    server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
