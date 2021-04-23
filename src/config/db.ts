const mongoose = require('mongoose');
const config = require('config');
const dbConnection = config.get('dbConnection');

const connectDB = async () => {
    try {
        await mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log('DATABASE CONNECTED');
    } catch (err) {
        console.log(err.message);
        process.exit(1)
    }
};

module.exports = connectDB;