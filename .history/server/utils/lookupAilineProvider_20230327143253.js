const fs = require('fs');

function getAirlineNameByCode(value, callback) {
  fs.readFile('../assets/AirlineCodes.json', (err, data) => {
    if (err) {
      return callback(err);
    }

    const jsonData = JSON.parse(data);

    const airline = jsonData.find(item => item.iata === value.toUpperCase() || item.icao === value.toUpperCase());

    if (!airline) {
      return callback(new Error('Airline not found.'));
    }

    callback(null, airline.name);
  });
}
