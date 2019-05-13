const axios = require('axios');

const getWeather = async( lat, lon ) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=290c7750e42709d98fb945605e7026a5&units=metric`);
    return response.data.main.temp;
}

module.exports = {
    getWeather
}