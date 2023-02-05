import express from 'express';
import ConnectDatabase from './db/connectDB.js';
const app = express();
const PORT = process.env.PORT || 4000;
// Method 1
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://prince:secret@127.0.0.1:27017/collagedb?authSource=collagedb";

// Method 2
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";


ConnectDatabase(DATABASE_URL);


app.listen(PORT, () =>{
    console.log(`Listening on port http://localhost${PORT}`);
})