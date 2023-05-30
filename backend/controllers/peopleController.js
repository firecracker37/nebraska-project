import asyncHandler from 'express-async-handler';
import People from '../models/peopleModel.js';

// @desc    Fetch List of All People
// @route   GET /api/people
// @access  Public
const getPeople = asyncHandler(async (req, res) => {
    const people = await People.find({});

    res.json(people);
});

//@desc    Fetch Single Person
//@route   GET /api/people/:id
//@access  Public
const getPerson = asyncHandler(async (req, res) => {
    const person = await People.findById(req.params.id);

    res.json(person);
});

//@desc    Add new person
//@route   POST /api/people/add
//@access  Admin Restricted
const addPerson = asyncHandler(async (req, res) => {
    const { name, aliveDates, summary, fulltext, image } = req.body;

    const person = await People.create({
        name,
        aliveDates,
        summary,
        fulltext,
        image,
    });

    if(person) {
        res.status(201).json({
            _id: person._id,
            name: person.name,
            aliveDates: person.aliveDates,
            summary: person.summary,
            fulltext: person.fulltext,
            image: person.image,
        });
    } else {
        res.status(400);
        throw new Error('Invalid person data');
    }
});

//@desc    Update person
//@route   PUT /api/people/:id
//@access  Admin Restricted
const updatePerson = asyncHandler(async (req, res) => {
    const person = await People.findById(req.params.id);

    if(person) {
        person.name = req.body.name || person.name;
        person.aliveDates = req.body.aliveDates || person.aliveDates;
        person.summary = req.body.summary || person.summary;
        person.fulltext = req.body.fulltext || person.fulltext;
        person.image = req.body.image || person.image;

        const updatedPerson = await person.save();

        res.json({
            _id: updatedPerson._id,
            name: updatedPerson.name,
            aliveDates: updatedPerson.aliveDates,
            summary: updatedPerson.summary,
            fulltext: updatedPerson.fulltext,
            image: updatedPerson.image,
        })
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

//@desc    Delete person
//@route   DELETE /api/people/:id
//@access  Admin Restricted
const deletePerson = asyncHandler(async (req, res) => {
    const person = await People.findById(req.params.id);

    if(person) {
        await person.remove();
        res.json({ message: 'Person removed' });
    } else {
        res.status(404);
        throw new Error('Person not found');
    }
});

export { getPeople, getPerson, addPerson, updatePerson, deletePerson };