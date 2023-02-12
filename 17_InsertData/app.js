import express from "express";
import connectDB from "./db/connectDB.js";
import createDoc from "./models/Student.js";
import "./models/Student.js";
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// Connect database
connectDB(DATABASE_URL);

// create Document and save
createDoc("anu", 21, 7890.7, ["reading", "dancing"], false, [
  { value: "this is bad" },
]);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
