const fs = require('fs');

const readJsonData = () =>{
    let jsonData =[];
    fs.readFile('../assets/AirlineCodes.json', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
     jsonData = JSON.parse(data);
 
});
return jsonData;
}
const searchForCompanyName = (array ,value)=>{
    let result = null;
    for(let i=0; i< array.length; i++){
        if (array[i].iata === value.toUpperCase() || array[i].icao === value.toUpperCase() ){
        console.log(i);
          result= array[i].name;
          return result;
        }
    };
    return result;
}

console.log(searchForCompanyName(readJsonData(), 'BA'))

