import {  Button, Dialog, DialogContent, DialogHeader, Flex, IconButton, Provider } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { FlatList, Platform, ScrollView, StyleSheet } from 'react-native';
import { View, Text} from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { Ionicons } from '@expo/vector-icons';
import {TextInput} from '@react-native-material/core';
import Modal from '../components/Modal/Modal';
import TripOption from '../components/TripOption';
import axios from 'axios';
import SearchOutcomeItem from '../components/SearchOutcomeItem';
import { flightqueActions } from '../store';
import Flights from '../components/Flights';
import * as Network from 'expo-network';

const IP_ADDRESS = process.env.IP_ADDRESS
const URL = `http://${IP_ADDRESS}:3000/`
const airports_endp =  `api/airports`
const flight_query_endp = `api/flight-query`

interface Props {
  title: string;
}
interface coords{
  latitude: number,
  longitude: number
}
interface cities{
  name: string,
  address: string,
  coords: coords,
}

const FlightSearch : React.FC<Props> = () => {
  console.log(IP_ADDRESS);
  const dispatch = useDispatch();
  const flightquery = useSelector(state=>state.flightQueSlice)
  const [visible, setVisible] = useState({departure: false, currentCity: false});
  const [visibleCalendar, setVisibleCalendar] = useState({departure: false, returnDate: false})
 useEffect(() => {
    axios.get(URL+airports_endp, {
      params:{
        keyword: flightquery.searchValue
      }
    })
      .then(response => {
        handleCityNamesChange(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [flightquery.searchValue]); 

// useEffect(() => {
//     const requestQuery = {
//       originLocationCode : flightquery.originLocationCode,
//       destinationLocationCode: flightquery.destinationLocationCode, 
//       departureDate: flightquery.departureDate
//     }
//     const sendData = async () => {
//       try {
//         const response = await axios.post(
//           URL+flight_query_endp,
//           requestQuery,
//           { headers: { 'Content-Type': 'application/json' } }
//         );
//           handleTicketsFetch(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     sendData();
//   }, [flightquery.returnDate,flightquery.departureDate, flightquery.destination, flightquery.departure]);
  //handle select when city or airport selected
  function handleSelectDeparture(name:string){
    dispatch(flightqueActions.setDepartureLocation({departure:name,originLocationCode: name.address.cityCode}))
    setVisible({...visible, departure:false})
  }
   //handle select when city or airport selected
  function handleSelectReturn(name:string){
    dispatch(flightqueActions.setDestinationLocation({ destination: name, destinationLocationCode: name.address.cityCode}))
    setVisible({...visible, currentCity :false})
  }
  //toggle calendar close
  function toggleCalendarModal(name:  string){
    setVisibleCalendar({...visibleCalendar,  [name]: false})
  }
  //Toggle trip oprions
  function toggelTripOption(option: string){
    dispatch(flightqueActions.setFlightOptions(option))
    }
  function handleSearch(city: string){
    dispatch(flightqueActions.setSearchValue(city))
  }
  function handleTicketsFetch(tickets :[]) {
    dispatch(flightqueActions.setFlightTickets(tickets))
  }
  function handleFlightDepartureDate(date:string){  
    dispatch(flightqueActions.setFlightDepartureDate(date))
  }
  function handleFlightReturnDate(date:string){
    dispatch(flightqueActions.setFlightReturnDate(date))
  }
  function handleCityNamesChange(name: []){
    dispatch(flightqueActions.setCityNames(name))
  }
  return (

  <View style={styles.container}>
    <View style={styles.row}>
      <TripOption 
      tripOptionName='One Way' 
      handleSelect={()=>toggelTripOption('oneWay')} 
      defOption={flightquery.tripOptions.oneWay}/>
      <TripOption 
      tripOptionName='Return' 
      handleSelect={()=>toggelTripOption('return')}
      defOption={flightquery.tripOptions.return}/>
    </View>
  
    <View style={styles.row} >
    <TextInput style={styles.input} placeholder="Current Location"  onPressIn={()=>setVisible({...visible, currentCity: true})}  value={flightquery.departure != null ? flightquery.departure : ''}/>
    <Ionicons name="md-airplane" size={24} color="#BF40BF" />
         <TextInput 
         style={styles.input} 
         placeholder="Destination" 
         onPressIn={()=>setVisible({...visible, departure:true})} 
         value={flightquery.destination != null ? flightquery.destination: ''}
         editable={!flightquery.tripOptions.return}/> 
    </View>
    {!flightquery.tripOptions.oneWay &&
    <View>
      <Text>Return flight</Text>
       <View style={styles.row} >
    <TextInput style={styles.input} placeholder="Current Location"  onPressIn={()=>setVisible({...visible, currentCity: true})}  value={flightquery.departure != null ? flightquery.departure.name : ''}/>
    <Text>to</Text>
         <TextInput 
         style={styles.input} 
         placeholder="Destination" 
         onPressIn={()=>setVisible({...visible, departure:true})} 
         value={flightquery.destination != null ? flightquery.destination.name : ''}
         editable={!flightquery.tripOptions.return}/> 
    </View>
         
         </View>}
    <View style={styles.row}>
    <View style={styles.input}>
    <Text>Departure:</Text>
    {
      flightquery.departureDate.length > 0 
      && <Text>{flightquery.departureDate}</Text>}
      <IconButton 
      icon={props => <Ionicons style={{fontSize:24}} name="calendar-sharp" />} 
      onPress={() => setVisibleCalendar({...visibleCalendar, departure:true})}
    />
    
   
   </View>
   <View style={styles.input}>
       <Text>Return date:</Text>
       {
     flightquery.returnDate.length > 0 
    && <Text>{flightquery.returnDate}</Text>}
     <IconButton 
    icon={props => <Ionicons style={{fontSize:24}} name="calendar-sharp" />} 
    onPress={() => setVisibleCalendar({...visibleCalendar, returnDate:true})}
  />
       
    </View>
    </View>
    <View style={styles.tickets}>
    <Text style={styles.title}>Flights to {flightquery.destination != null ? flightquery.destination :"" }</Text>
    <FlatList
        data={flightquery.flighttickets}
        renderItem={({item}) => 
        <Flights ticket={item} />}
      />
    </View>
    <Modal modalHeader='Please select departure date:'
      visible={visibleCalendar.departure}
      setVisible={()=>toggleCalendarModal("departure")}>
      <DatePicker 
    onSelectedChange = {(date)=>{
      handleFlightDepartureDate(date)
      toggleCalendarModal("departure");
    }}
    mode="calendar"/>
    </Modal>

    <Modal modalHeader='Please select return date:'
      visible={visibleCalendar.returnDate}
      setVisible={()=>toggleCalendarModal("returnDate")}>
      <DatePicker   
      onSelectedChange={(date)=>{
        handleFlightReturnDate(date)
        toggleCalendarModal("returnDate");
      }}
    mode="calendar"/>
    </Modal>

    <Modal 
    modalHeader='Departure city'
    visible={visible.departure}
    setVisible={setVisible}>
    <TextInput 
     placeholder='Enter city or airport'
     onChangeText={handleSearch} 
     value={flightquery.searchValue}/>    
    <FlatList
        style={styles.listoftickets}
        data={flightquery.cityNames}
        renderItem={({item}) => 
        <SearchOutcomeItem airport={item}
            handleSelect={handleSelectReturn} />}
      />
    <Button title="Select" onPress={()=>{setVisible({...visible, departure:false})}}/>
    </Modal>
    <Modal 
    modalHeader='Current city'
    visible={visible.currentCity}
    setVisible={setVisible}>
    <TextInput placeholder='Enter city or airport' onChangeText={input=>input && handleSearch(input)} value={flightquery.destination != null ? flightquery.destination: flightquery.searchValue}/>
{/* 
    {
      address === null ? 'loading' : 
      <SearchOutcomeItem  
      city="Search nearest to"
      airportName={address}
      handleSelect={handleSelectDeparture} />
    } */}

    <FlatList
        data={flightquery.cityNames}
        renderItem={({item}) => 
        <SearchOutcomeItem 
        airport={item}
        handleSelect={handleSelectDeparture}/>
      }
      />

    <Button title="Select" onPress={()=>{setVisible({...visible, currentCity:false})}}/>
    </Modal>
  </View>

);
};

export const FlightSearchProvider = () => (
  <Provider>
    <FlightSearch title='home'/>
  </Provider>
);

const styles = StyleSheet.create({
container: {
  flex: 1,
  width:"100%",
  alignItems: 'center',
  flexDirection: 'column'
},
input: {
  flexDirection:"row",
  alignItems:'center',
  justifyContent:'space-between',
  width: '45%',
  height: 25,
  padding: 0,
  marginVertical: 10,
},
row:{
  marginVertical: 10,
  width: '90%',
  display:'flex',
  flexDirection: 'row',
  alignItems:"center",
},
tripOptions:{
  padding:  10,
  paddingLeft:0,
},
tickets:{
  width: '100%',
  padding: 10,
  display:'flex',
  height: '100%',
  backgroundColor: 'white',

  borderRadius: 15,
  marginVertical: 15,
  paddingHorizontal:15,
  borderWidth: 1,
  borderColor: '#6A5ACD',
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowOpacity: 0.27,
  shadowRadius: 4.65,
  elevation: 6
  
},
title:{
  fontSize: 20
},
listoftickets:{
  width:"100%"
}


});
function useContext(AuthContext: React.Context<unknown>): { isLoggedin: any; setLogin: any; } {
  throw new Error('Function not implemented.');
}

