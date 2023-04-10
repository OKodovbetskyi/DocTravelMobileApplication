const fs = require('fs');

// Read the contents of the JSON file
fs.readFile('../assets/AirlineCodes.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Do something with the JSON data
  console.log(search(jsonData, 'FIN'));
});

const search = (array ,value)=>{
    let result = '';
    array.forEach(element => {
        if (element.iata === value.toUpperCase() ||element.icao === value.toUpperCase() ){
          result= element.name;
          return result;
        }
    });
}

