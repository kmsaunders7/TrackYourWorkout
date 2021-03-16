const router = require('express').Router()
const Workout = require('../models')


// GET route
router.get("/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


// POST route for creating exercise
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

});


// PUT route for update
router.put("/api/workouts/:id", (req, res) => {
  Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
