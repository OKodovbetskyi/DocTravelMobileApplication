import {  Button, Dialog, DialogContent, DialogHeader, Flex, IconButton, Provider } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { FlatList, Platform, ScrollView, StyleSheet } from 'react-native';
import { View, Text} from 'react-native'
import DatePicker from 'react-native-modern-datepicker';
import { Ionicons } from '@expo/vector-icons';
import {TextInput} from '@react-native-material/core';
import Modal from '../components/Modal/Modal';
import TripOption from '../components/TripOption';
import axios from 'axios';
import SearchOutcomeItem from '../components/SearchOutcomeItem';
import { geocodecoords, getmycoords } from '../utils/mylocation-service';
import Flights from '../components/Flights';
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

const itinialState = {
  currentLocation: "",
  originLocationCode: "",
  destinationLocationCode: "",
  departure:null,
  destination:null,
  departureDate: "",
  returnDate: "", 
  tripOptions:{
    oneWay: false,
    return:  false
  }
}
const FlightSearch : React.FC<Props> = () => {
  const [flightquery, setFlightQuery] = useState(itinialState);
  const [flighttickets, setFlightTickets] = useState([]);
  
  const [visible, setVisible] = useState({departure: false, currentCity: false});
  const [visibleCalendar, setVisibleCalendar] = useState({departure: false, returnDate: false})

  const [data, setData] = useState<Data[{}]>([]);

  const [searchValue, setSearchValue] = useState('Lon');
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    // send Axios request when search term changes
    axios.get(`http://10.130.35.123:5002/api/airports`, {
      params:{
        keyword: searchValue
      }
    })
      .then(response => {
        setData(response.data)
        isLoading(false)
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchValue]);

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post(
          'http://10.130.35.123:5002/api/flight-query',
          flightquery,
          { headers: { 'Content-Type': 'application/json' } }
        );
        setFlightTickets([...response.data]);
      } catch (error) {
        console.error(error);
      }
    };

    sendData();
  }, [flightquery]);
  //handle select when city or airport selected
  function handleSelectDeparture(name:string){
    setFlightQuery({...flightquery, departure: name , originLocationCode: name.address.cityCode});
    setVisible({...visible, departure:false})
  }
   //handle select when city or airport selected
   function handleSelectReturn(name:string){
    setFlightQuery({...flightquery, destination: name, destinationLocationCode: name.address.cityCode})
    setVisible({...visible, currentCity :false})
  }
  //toggle calendar close
  function toggleCalendarModal(name:  string){
    setVisibleCalendar({...visibleCalendar,  [name]: false})
  }
  //Toggle trip oprions
  function toggelTripOption(option: string){
    if (option === 'oneWay'){
      setFlightQuery(prevState => ({
        ...prevState,
        tripOptions: {
          return: false ,
          oneWay: true,
        }
    }))

    } else if (option === 'return'){
      setFlightQuery(prevState => ({
        ...prevState,
        tripOptions: {
          oneWay: false ,
          return: true,
        }
    }))
    }
    console.log(flightquery.tripOptions)
}
  const [address, setmyaddress]  = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const mycoords = await getmycoords();
        if (mycoords) {
          const myaddress = await geocodecoords(mycoords);
          const separated = myaddress.split(',');
          const formatted = separated[1] + separated[2];
          setmyaddress(formatted)
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (

  <View style={styles.container}>
    <View style={styles.row}>
      <TripOption tripOptionName='One Way' handleSelect={()=>toggelTripOption('oneWay')} defOption={flightquery.tripOptions.oneWay}/>
      <TripOption tripOptionName='Return' handleSelect={()=>toggelTripOption('return')}/>
    </View>
    <View style={styles.row} >
    <TextInput style={styles.input} placeholder="Current Location"  onPressIn={()=>setVisible({...visible, currentCity: true})}  value={flightquery.departure != null ? flightquery.departure.name : ''}/>
    <Text> to </Text>
    <TextInput style={styles.input} placeholder="Destination" onPressIn={()=>setVisible({...visible, departure:true})} value={flightquery.destination != null ? flightquery.destination.name : ''}/>
    </View>
    <View style={styles.row}>
    <View style={styles.input}>
    <Text>Departure:</Text>
    {
      flightquery.departureDate.length > 0 
      ? <Text>{flightquery.departureDate}</Text>
      : <IconButton 
      icon={props => <Ionicons style={{fontSize:24}} name="calendar-sharp" />} 
      onPress={() => setVisibleCalendar({...visibleCalendar, departure:true})}
    />
    }
   
   </View>
   <View style={styles.input}>
       <Text>Return date:</Text>
       {
     flightquery.returnDate.length > 0 
    ? <Text>{flightquery.returnDate}</Text>
    :
     <IconButton 
    icon={props => <Ionicons style={{fontSize:24}} name="calendar-sharp" />} 
    onPress={() => setVisibleCalendar({...visibleCalendar, returnDate:true})}
  />}
       
    </View>
    </View>
    <View style={styles.tickets}>
    <Text style={styles.title}>Flights to {flightquery.destination != null ? flightquery.destination.name :"" }</Text>
    <FlatList
        data={flighttickets}
        renderItem={({item}) => 
        <Flights ticket={item} />}
      />
    </View>
    <Modal modalHeader='Please select departure date:'
      visible={visibleCalendar.departure}
      setVisible={()=>toggleCalendarModal("departure")}>
      <DatePicker 
    onSelectedChange = {(date)=>{
      setFlightQuery({...flightquery, departureDate: date})
      toggleCalendarModal("departure");
    }}
    mode="calendar"/>
    </Modal>

    <Modal modalHeader='Please select return date:'
      visible={visibleCalendar.returnDate}
      setVisible={()=>toggleCalendarModal("returnDate")}>
      <DatePicker   onSelectedChange={(date)=>{
        setFlightQuery({...flightquery, returnDate: date})
        toggleCalendarModal("returnDate");
      }}
    mode="calendar"/>
    </Modal>

    <Modal 
    modalHeader='Departure city'
    visible={visible.departure}
    setVisible={setVisible}>
    <TextInput placeholder='Enter city or airport' onChangeText={input=>input && setSearchValue(input) } />    
    <FlatList
        style={styles.listoftickets}
        data={data}
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
    <TextInput placeholder='Enter city or airport' onChangeText={input=>input && setSearchValue(input) } />
{/* 
    {
      address === null ? 'loading' : 
      <SearchOutcomeItem  
      city="Search nearest to"
      airportName={address}
      handleSelect={handleSelectDeparture} />
    } */}

    <FlatList
        data={data}
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

