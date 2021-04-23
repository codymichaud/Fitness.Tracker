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


router.put('api/workouts/id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercise: body } },
        { new: true, runValidators: true }
    )
        .then((workoutDB) => {
            res.json(workoutDB)
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.get('api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
        .sort({ _id: -1 })
        .limit(7)
        .then((workoutDB) => {
            res.json(workoutDB);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
                }
            }
        }
    ])
        .then((workoutDB) => {
            res.json(workoutDB)
        })
        .catch(error => {
            res.status(400).json(error);
        });
});
module.exports = router;