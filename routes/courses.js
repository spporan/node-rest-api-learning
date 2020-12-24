const express = require('express');
const course = require('../models/course');
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

//find specific course
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
            message: error
        });

    }

});

//delete course

router.delete("/:id", async (req, res) => {
    try {
        const deletedCourse = await Course.remove({ _id: req.params.id });

        res.json(deletedCourse);

    } catch (error) {
        res.json({
            message: error
        })
    }
});

//update course

router.put("/:id", async (req, res) => {
    try {
        const updatedCourse = await Course.updateOne(
            { 
                _id: req.params.id
             },
            {
                 $set: { description: req.body.description } 
            }
        );
        res.json(updatedCourse);
    } catch (error) {
        res.json({
            message: error
        });
    }
})


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