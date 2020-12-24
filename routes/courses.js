const express = require('express')
const Course = require('../models/course')
const router = express.Router()

const courses = [
    { id: 2, name: "Data structure" },
    { id: 3, name: "Algorithm" },
    { id: 1, name: "Programming" },
    { id: 9, name: "Accounting" }
]

//get all course
router.get('/', async (req, res) => {

    try {

        const courses = await Course.find();
        res.status(200)
            .json(courses)

    } catch (error) {
        res.json({
            message: error
        })
    }

});

//find specific couse
router.get('/:id', async (req, res) => {
    console.log(req.params.id)

    try {
        const course = await Course.findById(req.params.id);
        console.log(course)

        if (!course) {
            res.status(404).send("The course with the given id was not found");
            return;
        }
        res.json(course);
    } catch (error) {
        res.json({
            message:error
        });

    }

});

//create a new course
router.post('/', async (req, res) => {
    console.log(req.body)

    const course = new Course({
        title: req.body.title,
        description: req.body.description,
    });

    const savedCourse = await course.save();
    try {
        res.status(201).json(savedCourse)
    } catch (error) {
        res.json({
            message: error
        })
    }
});


module.exports = router;