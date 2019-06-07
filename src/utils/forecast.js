const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/ced3827b73b558b7954ef73250fab633/'+ lat + ','+ lon + '?units=si';
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback(body.error, undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    }) 
}

module.exports = forecast;