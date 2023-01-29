import express from 'express';
import { studentAll, studentDelete } from '../controllers/studentController.js';
const router = express.Router();


router.get('/all', studentAll);

router.get('/delete/:id([0-9]{2})', studentDelete);

export default router;