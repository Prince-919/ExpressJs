import express from 'express';
import student from './routes/student.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Admin')
})

app.use('/student', student)

app.listen(PORT, () => {
    console.log(`Listening or port http://localhost${PORT}`);
});