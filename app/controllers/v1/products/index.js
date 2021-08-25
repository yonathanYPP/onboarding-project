
const router = require('express').Router();

router.get('/list', function (req, res) {
  return res.status(200).json({
    meta: null,
    data: []
  })
});

router.post('/create', function (req, res) {
  return res.status(200).json({
    meta: null,
    data: null
  })
});

module.exports = router;