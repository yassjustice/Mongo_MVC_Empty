const connectDB = require('./Models/db');
const express = require('express')
const app = express()

const port = process.env.PORT || 4000;
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
    try{
        await connectDB(MONGO_URI);
        app.listen(port, (req, res) => {
            console.log(`mconnecti l DB, o listening on http://localhost:${port}`);
        })
    }catch(e){
        console.log(e);
    }
}
start();
