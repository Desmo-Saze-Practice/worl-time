/**************
    MODULES
 **************/

// import express module
const express = require("express");
const router = express.Router();

// import cities module
const cities = require('./my_modules/capitalCities');

// for timezone module
var dayjs = require('dayjs');

var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
const capitalCities = require("./my_modules/capitalCities");
dayjs.extend(utc);
dayjs.extend(timezone);

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

    const city = capitalCities.find((capitalCity) => {
        return cityName === capitalCity.name.toLowerCase();
    });

    if (!city) {
        res.status(404).send("Error 404");
        console.log(req.params.cityName);

        return;
    }

    dayjs.tz.setDefault(city.tz);
    let date = dayjs().format('LLLL');
    let time = dayjs().tz(city.tz).format('HH:mm');
    console.log(req.params.cityName);
    res.send(`Dans la ville de ${cityName} il est ${time}.`);
});

module.exports = router;
