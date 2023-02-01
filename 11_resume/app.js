import express from 'express';
import web from './routes/web.js';
const app = express();
const PORT = process.env.PORT || 4000;

// set template engine
app.set('view engine', 'ejs');

// static file load
app.use(express.static('public'));

// load page 
app.use('/', web);


app.listen(PORT, () => {
    console.log(`Lestening on port http://localhost${PORT}`);
});