const fs = require('fs');

const readJsonData = () =>{
    let jsonData =[];
    let result = '';
    fs.readFile('../assets/AirlineCodes.json',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
       result = searchForCompanyName(JSON.parse(data), 'BA');
});
return result;
}

const searchForCompanyName = (array ,value)=>{
    console.log(array);
    let result = null;
    for(let i=0; i< array.length; i++){
        if (array[i].iata === value.toUpperCase() || array[i].icao === value.toUpperCase() ){
          result= array[i].name;
          return result;
        }
    };
    return result;
}

console.log(readJsonData())

