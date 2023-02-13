import express from "express";
import connectDB from "./db/connectDB.js";
import { getAllDoc } from "./models/Student.js";
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectDB(DATABASE_URL);

// Retrieve Document
getAllDoc();

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost${PORT}`);
});
