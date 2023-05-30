import express from 'express';
import { contactForm, getAllContacts } from '../controllers/contactController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(contactForm).get(protectAdmin, getAllContacts);

export default router;