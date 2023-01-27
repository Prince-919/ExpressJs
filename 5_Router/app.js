import express from 'express';
import student from './routers/student.js';
import teacher from './routers/teacher.js';
const app = express();
const PORT = process.env.PORT || 3000;

// Load Router Module
app.use('/student', student);
app.use('/teacher', teacher)

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost${PORT}`);
});

 