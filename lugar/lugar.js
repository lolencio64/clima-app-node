const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=62d2cbbe677302d6ef844a508d8f5b38&query=${encodeUlr}`,
        timeout: 1000
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);

    }
    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}