const axios = require('axios');

const getLatitudeLongitude = async( addr ) => {

    const encoderUrl = encodeURI(addr);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoderUrl}`,
        headers: {'X-RapidAPI-Key': 'f040ad1086mshe8852249e6338d2p180aaejsnf09b123e7b9a'}
    });
    const response = await instance.get();
    
    if(response.data.Results.length === 0) {
        throw new Error(`No results to ${ addr }`);
    }

    const data = response.data.Results[0];
    const address = data.name;
    const latitude = data.lat;
    const longitude = data.lon;

    return {
        address,
        latitude,
        longitude
    }
}

module.exports = {
    getLatitudeLongitude
}
