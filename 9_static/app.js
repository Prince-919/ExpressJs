import express from 'express';
import web from './routes/web.js';
import { join } from 'path';
const app = express();
const PORT = process.env.PORT || 3000;

// static file
app.use( express.static(join(process.cwd(), 'public')));
// app.use('/static', express.static(join(process.cwd(), 'public')));

app.use('/', web);

app.listen(PORT, () => {
    console.log(`Listening on port htpp://localhost${PORT}`);
})