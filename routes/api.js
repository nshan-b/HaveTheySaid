const express = require('express');
const router = express.Router();

// GET - api/
router.get('/', (req, res, next) => {
    res.send('Hello from API!');
});

module.exports = router;