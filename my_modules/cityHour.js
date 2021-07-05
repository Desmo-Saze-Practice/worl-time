/**************
    MODULES
 **************/
// import cities module
const capitalCities = require("./capitalCities");

// for timezone module
var dayjs = require('dayjs');

var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

const cityHour = {
    getCity: (cityName) => {

        const city = capitalCities.find((capitalCity) => {
            return cityName === capitalCity.name.toLowerCase();
        });
    
        dayjs.tz.setDefault(city);
        let time = dayjs().tz(city.tz).format('HH:mm');
        return {
            name: city.name,
            time: time
        }
    }
}

module.exports = cityHour;