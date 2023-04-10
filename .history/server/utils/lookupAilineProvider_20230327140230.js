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
  console.log(search(jsonData, 'B'));
});

const search = (array ,value)=>{
    let result = null;
    for(let i=0; i<= array.length; i++){
        if (array[i].iata === value.toUpperCase() || array[i].icao === value.toUpperCase() ){
        console.log(i);
          result= array[i].name;
          return result;
        }
    
    };
    return result;
}

