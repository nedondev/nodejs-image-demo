const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_USERNAME = process.env.DB_USERNAME;
const MONGO_PASSWORD = process.env.DB_PASSWORD;
const MONGO_HOSTNAME = process.env.DB_HOSTNAME;
const MONGO_PORT = process.env.DB_PORT;
const MONGO_DB = process.env.DB_NAME;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

console.log(url);
mongoose.connect(url, {useNewUrlParser: true});
