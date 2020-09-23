const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoieW9tZXJzbWl0aCIsImEiOiJja2ZkZWhwYm0xMGVyMnJwZHA0NGU4dmxzIn0.nDgoPu10v89ePxqGKvPdnQ`,
        headers: { 'Yomer': 'Smith' }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        return null;
    }

    const data = resp.data.features[0];
    const dir = data.place_name;
    const lat = data.center[0];
    const lng = data.center[1];


    return {
        dir,
        lat,
        lng
    }
    /* .then(resp => {
            console.log(resp.data.features[0]);

        })
        .catch(err => {
            console.log('ERROR!!!!!! ', err);

        }) */

}

module.exports = {
    getLugarLatLng
}