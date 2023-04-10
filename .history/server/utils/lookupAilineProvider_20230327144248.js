const fs = require('fs');

const getAirlineNameByCode = (filePath,value, callback)=> {
try {
    fs.readFile(filePath, (err, data) => {
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
} catch(e){
    console.log('Json file could not be found', e);
}
 
}

module.exports = getAirlineNameByCode;