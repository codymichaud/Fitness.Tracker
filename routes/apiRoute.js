const router = require('express').Router();
const Workout = require('../models/workout.js');

router.post('api/workouts', ({ body }, res) => {
    Workout.create({})
        .then((workoutDB) => {
            res.json(workoutDB)
        })
        .catch(error => {
            res.status(400).json(error);
        });
});