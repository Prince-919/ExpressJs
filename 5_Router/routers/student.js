import express from 'express';
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('All Student');
})
router.post('/create', (req, res) => {
    res.send('Add New Student');
})
router.put('/update', (req, res) => {
    res.send('Student Updated');
})
router.delete('/delete', (req, res) => {
    res.send('Student Updated');
})

export default router;