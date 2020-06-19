const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'transactions.html'));
});

router.get('/summary', (req, res, send) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'summary.html'))
});

module.exports = router;