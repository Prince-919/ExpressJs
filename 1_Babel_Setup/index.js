// setup express with babel
import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello, Prince Good Morning.')
})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
