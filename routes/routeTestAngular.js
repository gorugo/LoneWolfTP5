//For tests
var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
    res.render('pageTest');
});

module.exports = router;
