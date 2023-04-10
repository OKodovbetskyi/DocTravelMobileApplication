// src/config
const dotenv = require("dotenv");
dotenv.config();

for (const name of Object.keys(interfaces)) {
  for (const iface of interfaces[name]) {
    if (iface.family === 'IPv4' && !iface.internal) {
      addresses.push(iface.address);
    }
  }
}

const ipAddress = addresses[0];
console.log(ipAddress); // prints the first IPv4 address found
// Exporting env variable
module.exports = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};