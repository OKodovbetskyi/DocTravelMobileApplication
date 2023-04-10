import fs from 'fs'

const readFile= async ()=>{
    const [err, data]= fs.readFile('../assets/AirlineCodes.json');
    if (err) return 'Could not find file'
    
}

