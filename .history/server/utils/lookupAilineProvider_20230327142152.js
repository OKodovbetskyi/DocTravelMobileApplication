const fs = require('fs');

const searchForCompanyName = (value) =>{
    let result = '';
    fs.readFile('../assets/AirlineCodes.json',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
       const jsonData = JSON.parse(data)
       result = jsonData.find(item=> item.iata === value.toUpperCase() || item.icao === value.toUpperCase());
       result = result.name;
});
return result;
}



console.log(searchForCompanyName('BA'));

