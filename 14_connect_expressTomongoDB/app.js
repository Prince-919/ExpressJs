import express from 'express';
// import connectDB from './db/connectdb.js';
import asyncConnect from './db/connectdb.js';

const app = express();
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/collagedb";

 
// connectDB(DATABASE_URL);
asyncConnect(DATABASE_URL);
 
 

app.listen(PORT, () => {
    console.log(`Listening on port htpp://localhost${PORT}`);
});