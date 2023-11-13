var express = require('express');
var path = require('path');
var router = express.Router();

/* GET landing */
router.get('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '..', 'public_html') });
});

/* GET politics */
router.get('/politicnda', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '..',  'public_html') });
});

module.exports = router;
