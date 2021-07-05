// import express module
const express = require("express");
const router = express.Router();

const cityHour = require('./my_modules/cityHour');

// for timezone module
var dayjs = require('dayjs');
var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);
require('dayjs/locale/fr');
dayjs.locale('fr');

/*************
    ROUTES
 *************/

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html');
});

router.get('/city', (req, res) => {
    console.log('welcome');
    res.sendFile(__dirname + '/public/views/index.html');
});

router.get('/city/:cityName', (req, res) => {

    const cityName = req.params.cityName;

    const city = cityHour.getCity(cityName)

    if (!city) {
        res
            .status(404)
            .send("Error 404");
        return;
    }

    res.send(`Dans la ville de ${city.name} il est ${city.time}.`);

});

module.exports = router;
