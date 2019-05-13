const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Description of country to get the weather',
        demand: true
    }
}).argv;

//console.log( argv.address );
//place.getLatitudeLongitude( argv.address )
//    .then( console.log );
//
//weather.getWeather(40.419998,-3.70000)
//    .then( console.log )
//    .catch( console.log );
//
const getInfo = async( addr ) => {

    try {
        const data = await place.getLatitudeLongitude(addr);
        const temp = await weather.getWeather(data.latitude, data.longitude);
        return `Weather of ${ addr } is ${ temp }`;
    } catch (e) {
        return `Weather the ${addr} not found..!`;
    }
    
}

getInfo( argv.address )
    .then( console.log )
    .catch( console.log );  
