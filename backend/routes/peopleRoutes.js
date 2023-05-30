import express from 'express';
import {
  getPeople,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
} from '../controllers/peopleController.js';
import { protectAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Fetch List of All People
router.get('/', getPeople);

// Fetch Single Person
router.get('/:id', getPerson);

// Add new person (Admin Restricted)
router.post('/add', protectAdmin, addPerson);

// Update person (Admin Restricted)
router.put('/:id', protectAdmin, updatePerson);

// Delete person (Admin Restricted)
router.delete('/:id', protectAdmin, deletePerson);

export default router;
