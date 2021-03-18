const path = require('path')
const router = require('express').Router()

// route for index.html
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// route for exercise.html
router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// route for stats.html
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

// export the router
module.exports = router
