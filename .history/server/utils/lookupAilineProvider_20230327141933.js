const fs = require('fs');

const searchForCompanyName = (value) =>{
    let result = '';
    fs.readFile('../assets/AirlineCodes.json',(err, data) => {
        if (err) {
          console.error(err);
          return;
        }
       const jsonData = JSON.parse(data)
       result = jsonData
       console.log(result);
       return result;
});

}



console.log(searchForCompanyName('BA'));

