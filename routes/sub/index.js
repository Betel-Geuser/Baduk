const sub = require('express').Router();

//handle root of this dir
sub.get('/', (req, res) => {
    res.render('test.njk');
});

module.exports = sub;
