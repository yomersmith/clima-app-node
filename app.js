const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

const getInfo = async(dire) => {
    const lug = await lugar.getLugarLatLng(dire);
    const cli = await clima.getClima(lug.lat, lug.lng);

    if (lug && cli) {
        return `El clima de ${lug.dir}, es de ${cli}ºC`;
    } else if (lug) {
        throw new Error(`No se pudo determinar el clima de ${lug.dir}`);

    } else {
        throw new Error(`No se pudo determinar ni el  clima ni el sitio`);

    }


}

getInfo(argv.direccion)
    .then((result) => {
        console.log(result);

    }).catch((err) => {
        console.log(err);

    });

/* lugar.getLugarLatLng(argv.direccion)
.then((result) => {
    console.log(result);


}).catch((err) => {
    console.log(err);



}); */

/* clima.getClima(-73.25972, 10.46028)
    .then((result) => {
        console.log(result);

    }).catch((err) => {
        console.log(err);

    }); */