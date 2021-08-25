
const router = require('express').Router();
const passport = require(appRoot + '/lib/passport/strategies/basic.js');

router.get('/basic', passport.authenticate(['basic'], { session: false }), function (req, res) {
  return res.status(200).json({
    meta: {
      statuCode: 200,
      message: 'success'
    },
    data: req.Client
  })
});

module.exports = router;