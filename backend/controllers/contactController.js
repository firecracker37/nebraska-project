import asyncHandler from 'express-async-handler';
import Contact from '../models/contactModel.js';

// @desc    Submit Contact Form to Database
// @route   POST /api/contact
// @access  Public
const contactForm = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
  
    const contact = await Contact.create({
        name,
        email,
        message,
    })

    if(contact) {
        res.status(201).json({
            _id: contact._id,
            name: contact.name,
            email: contact.email,
            message: contact.message,
          });
    } else {
        res.status(400);
        throw new Error('Invalid contact form data');
    }
});

// @desc    Get all contact information
// @route   GET /api/contact
// @access  Private
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({}); // Fetch all contacts from the database
  
    res.json(contacts);
  });

export { contactForm,  getAllContacts };