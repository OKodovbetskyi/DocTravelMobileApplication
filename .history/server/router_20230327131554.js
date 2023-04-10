
const Amadeus = require("amadeus");
const router = require("express").Router();

//Getting env variables 
const { CLIENT_ID, CLIENT_SECRET } = require('./config');
const { response } = require("express");
const API = `api`;
//This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

//Endpoint
const getNearestAirportController =(req,res)=>{
  const { longitude, latitude } = req.body;
  amadeus.referenceData.locations.airports.get({
    longitude ,
    latitude 
  })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
const flightTicketsSearch = async (req, res) => {
  console.log(req.body)
  const { originLocationCode, destinationLocationCode, departureDate, page } = req.body;
  const pageSize = 10; // Number of results per page
  if (originLocationCode, destinationLocationCode, departureDate != "") {
    const formattedDate = departureDate.split('/').join('-');
    let flights = [];
    amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originLocationCode,
      destinationLocationCode: destinationLocationCode,
      departureDate: formattedDate,
      adults: '1',
      currencyCode: "GBP",
      offset: (page - 1) * pageSize, // Calculate the offset based on the current page
    }).then(function(response) {
      console.log(response.body)
      res.send(JSON.parse(response.body).data)
    }).catch(function(responseError) {
      console.log(responseError);
      res.send({ 'error': responseError })
    });
  }
}

 const airportsController = async (req, res) => {
  const { keyword = 'Lond' } = req.query;
  if (keyword.length > 1) {
    amadeus.referenceData.locations.get({
      subType: 'AIRPORT',
      keyword: keyword,
    })
      .then(response => res.send(response.data))
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ message: 'Not enough information' });
  }
}
const getAirlineNameController = async (req, res) => {
  const { airlineCode } = req.query;
  let response = {};
  try {
    const airlineData = await amadeus.referenceData.airlines.get({
      airlineCodes: airlineCode,
    });
    response = airlineData.data;
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    response = { error: 'An error occurred while fetching airline data' };
    res.status(500).json(response);
  }
}


router.post(`/${API}/flight-query`, (req,res)=>  flightTicketsSearch(req,res));
router.post(`/${API}/nearest-airport`, (req,res)=> getNearestAirportController(req,res));
router.get(`/${API}/airlinecode`, (req, res)=>getAirlineNameController(req,res))
router.get(`/${API}/airports`, (req, res)=> airportsController(req,res))
router.get('/', (req,res)=>res.json({message: '404 Page Not Found, Possibly wrong endpoint'}))
module.exports = router;