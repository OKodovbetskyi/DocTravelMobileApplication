// src/config
const dotenv = require("dotenv");
dotenv.config();
const os = require('os');
const interfaces = os.networkInterfaces();
const fs = require('fs');
const addresses = [];
for (const name of Object.keys(interfaces)) {
  for (const iface of interfaces[name]) {
    if (iface.family === 'IPv4' && !iface.internal) {
      addresses.push(iface.address);
    }
  }
}


const ipAddress = addresses[0];
console.log("Running on IP:",ipAddress);

const currentConfig = dotenv.parse(fs.readFileSync('.env'));
currentConfig.IP_ADDRESS = ipAddress;

const updatedConfig = Object.keys(currentConfig)
  .map(key => `${key}=${currentConfig[key]}`)
  .join('\n');

fs.writeFileSync('.env', updatedConfig);

module.exports= {
    IP_ADDRESS: 
}