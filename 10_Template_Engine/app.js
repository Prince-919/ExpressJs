import express from 'express';
import web from './routes/web.js';
import { join } from 'path';
const app = express();
const PORT = process.env.PORT || 3000;


app.use('/', web);

// static file load.
app.use(express.static(join(process.cwd(), 'public')));

app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost${PORT}`);
})