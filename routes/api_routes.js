const router = require('express').Router()
const db = require('../models')

// Add exercises to the most recent workout plan.
// Add new exercises to a new workout plan.
// View the combined weight of multiple exercises from the past seven workouts on the stats page.
// View the total duration of each workout from the past seven workouts on the stats page.


router.get('/api/workouts', (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});


// POST route for creating new workout plan
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });

});


// PUT route for updating and already existing workout plan
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router
