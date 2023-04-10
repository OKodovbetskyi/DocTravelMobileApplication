// src/router.js
// const Amadeus = require("amadeus");
// const router = require("express").Router();

// Getting env variables 
// const { CLIENT_ID, CLIENT_SECRET } = require('./config');
// const { response } = require("express");
// const API = `api`;
// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
// const amadeus = new Amadeus({
//   clientId: CLIENT_ID,
//   clientSecret: CLIENT_SECRET
// });

// Endpoint
// const getNearestAirportController =(req,res)=>{
//   const { longitude, latitude } = req.body;
//   amadeus.referenceData.locations.airports.get({
//     longitude ,
//     latitude 
//   })
//     .then(response => {
//       res.send(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
// const flightTicketsSearch =(req,res)=>{
//   console.log(req.body)
//     const {originLocationCode, destinationLocationCode, departureDate} = req.body;
//     console.log(destinationLocationCode)
//     if (originLocationCode, destinationLocationCode, departureDate != "" ){
//     const formattedDate = departureDate.split('/').join('-');
//     let flights = [];
//     amadeus.shopping.flightOffersSearch.get({
//         originLocationCode: originLocationCode,
//         destinationLocationCode: destinationLocationCode,
//         departureDate: formattedDate,
//         adults: '1',
//         currencyCode: "GBP",
    
//     }).then(function(response){
//       res.send(JSON.parse(response.body).data)
//     }).catch(function(responseError){
//       res.send({'error':responseError})
//     });  
//   } 
//  }
//  const airportsController  =(req, res) =>{
//   const {keyword} = req.query;
//   amadeus.referenceData.locations.get({
//     keyword : keyword,
//     subType : Amadeus.location.airport
//   }).then(response => res.send(response.data))
//   .catch((err) => {
//     console.error(err);
//   });
//  }

// router.post(`/${API}/flight-query`, (req,res)=>  flightTicketsSearch(req,res));
// router.post(`/${API}/nearest-airport`, (req,res)=> getNearestAirportController(req,res));
// router.get(`/api/airports`, (req, res)=> airportsController(req,res))
// router.get('/', (req,res)=>res.json({message: '404 Page Not Found, Possibly wrong endpoint'}))
// module.exports = router;