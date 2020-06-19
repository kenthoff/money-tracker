const express = require('express');
const router = express.Router()

router.use('/add-product', (req, res, next) => {
    res.send('haii');
});

module.exports = router;