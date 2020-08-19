const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f8d0b3a8e1aef5b3161f422bb1782da8&units=metric`);

    let temp = resp.data.main.temp;
    return temp;
}


module.exports = {
    getClima
}