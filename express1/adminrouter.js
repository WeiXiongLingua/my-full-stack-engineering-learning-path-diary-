const express = require('express')

const router = express.Router();


router.get('/home', (req, res) => {
    res.send('Homepage');
})

router.get('/search', (req, res) => {
    res.send('Searching')
})

module.exports = router