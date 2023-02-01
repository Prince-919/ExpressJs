
import express from 'express';
const router = express.Router();
import { homeController } from '../controllers/homeController.js';
import { skillController } from '../controllers/skillController.js';
import { serviceController } from '../controllers/serviceController.js';
import { contactController } from '../controllers/contactController.js';


router.get('/', homeController);
router.get('/skills', skillController);
router.get('/services', serviceController);
router.get('/contact', contactController);

export default router;