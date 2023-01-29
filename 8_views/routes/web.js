import express from 'express';
import homeController from '../controllers/homeController.js';
import aboutController from '../controllers/aboutController.js';
import contactController from '../controllers/contactController.js';
const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);


export default router;