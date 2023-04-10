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
  console.log(search(jsonData, 'BA'));
});

const search = (array ,value)=>{
    array.forEach(element => {
        if (element.iata === value.toUpperCase()){
            console.log(element.name);
            return element.name
        }
    });
    return -1;
}

