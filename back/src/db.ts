import mongoose from 'mongoose';
const config = require('./config/default.json');

const connectDB = async () => {
    try {
        await mongoose.connect(config.dbConnection, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Successfully connected to the database :')");
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
};

export default connectDB();