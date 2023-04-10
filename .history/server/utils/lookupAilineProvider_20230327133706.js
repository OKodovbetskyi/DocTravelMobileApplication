const fs= require('fs');

const readFile= async ()=>{
    const [err, data]= fs.readFile('../assets/AirlineCodes.json');
    if (err) return 'Could not find file'
    const jsonData = JSON.parse(data);
    console.log(jsonData);
}
readFile();

