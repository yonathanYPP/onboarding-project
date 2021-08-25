const router = require('express').Router();

router.use('/client', require('./clients'));
router.use('/product', require('./products'));
router.use('/user', require('./users'));

module.exports = router;