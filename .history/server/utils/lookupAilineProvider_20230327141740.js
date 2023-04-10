const fs = require('fs');

const readJsonData = (value) =>{
    let result = '';
    fs.readFile('../assets/AirlineCodes.json',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
       const jsonData = JSON.parse(data)
       result = jsonData.find((item)=> item.iata === value || item.icao === value)
       return result;
});

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

console.log(readJsonData('BA'))

