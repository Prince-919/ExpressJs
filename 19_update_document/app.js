import express from "express";
import connectDB from "./db/connectDB.js";
import {
  updateDocById,
  updateDocOne,
  updateDocByAge,
  updateManyDoc,
} from "./models/Student.js";
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

connectDB(DATABASE_URL);

updateDocById("63e8b09a11a73c9c9939d394");
updateDocOne("63e8b09a11a73c9c9939d394");
updateDocByAge(24);
updateManyDoc(22);

app.listen(PORT, () => {
  console.log(`Listening on port http:localhost${PORT}`);
});
