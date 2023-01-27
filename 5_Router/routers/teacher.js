import express from 'express';
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('All Teacher');
})
router.post('/create', (req, res) => {
    res.send('Add New Teacher');
})
router.put('/update', (req, res) => {
    res.send('Teacher Updated');
})
router.delete('/delete', (req, res) => {
    res.send('Teacher Updated');
})

export default router;