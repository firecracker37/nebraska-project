import express from 'express';
import { contactForm } from '../controllers/contactController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', contactForm);

export default router;