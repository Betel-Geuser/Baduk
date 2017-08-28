const routes = require('express').Router();
const sub    = require('./sub');

//handle root of this dir
routes.get('/', (req, res) => {
    res.render('index.njk');
});

//handle leaves of this dir
routes.get('/test', (req, res) => {
    res.render('test.njk');
});

//handle actual sub-folders of this dir
routes.use('/sub', sub);

module.exports = routes;
