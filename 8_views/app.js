import express from 'express';
import web from './routes/web.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', web);


app.listen(PORT, () => {
    console.log(`Lestening or port http://localhost${PORT}`);
})