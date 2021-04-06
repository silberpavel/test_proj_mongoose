const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
    //res.send('Паралельно Hello world from index.js') // Или render или send (берет что первое)
})

module.exports = router