const axios = require('axios');

const getClima = async(lng, lat) => {

    const rta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0b4668a77bb55893ae6938451869a1c5&units=metric`)

    if (!rta.data.main.temp) {
        return null;

    }
    return rta.data.main.temp;

}

module.exports = {
    getClima
}