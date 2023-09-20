var express = require('express');
var router = express.Router();

var { getTrailerById } = require('../utils/file');

/* GET users listing. */
router.get('/:id', function(req, res) {
  getTrailerById(req.params.id, ({ data, photo }) => {
    res.send({ data, photo });
  });
});

module.exports = router;
