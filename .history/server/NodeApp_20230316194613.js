var request = require('request');
var express = require('express');
const cors = require('cors');
const router = require('./router');
const path = require('path');
const os = require('os');
require('dotenv').config();

const interfaces = os.networkInterfaces();
const addresses = [];

for (const name of Object.keys(interfaces)) {
  for (const iface of interfaces[name]) {
    if (iface.family === 'IPv4' && !iface.internal) {
      addresses.push(iface.address);
    }
  }
}

const ipAddress = addresses[0];
console.log(ipAddress); // prints the first IPv4 address found


const IP = "";
const PORT= 5002;
const app = express();
const bodyParser = require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 // applying handler for API
 app.use("/", router);
 // Handling serving static files
 app.use(express.static(path.join(__dirname, '../client/build')));
 // Serving app on PORT we defined
 app.listen(PORT, () => {
   console.log(`Express is running on port ${PORT}`);
 });