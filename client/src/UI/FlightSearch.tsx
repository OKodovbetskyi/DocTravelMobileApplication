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
interface Props {
  title: string;
}

const itinialCities = [
  {
    name: "London Heathrow",
    address:{cityName: "London", countryName: "UK"}
  },
  {
    name: "Madrid Internationale",
    address:{cityName: "Madrid", countryName: "Spain"}
  },
  {
    name: "Lviv Danylo Halutsky",
    address:{cityName: "Lviv", countryName: "Ukraine"}
  },
  {
    name: "Kyiv City",
    address:{cityName: "Kyin", countryName: "Ukraine"}
  }
]
const FlightSearch : React.FC<Props> = () => {

  const [visible, setVisible] = useState({departure: false, currentCity: false});
  const [visibleCalendar, setVisibleCalendar] = useState({departure: false, returnDate: false})
  
  const [visibleCurrentLocation, setVisibleCurrentLocation] = useState(false); 
  const [selectedDestination, setSelectedDestination] = useState({departure: '', arrivalCity: ''});

  const [cities, setSities ] = useState<Array<string>>([]);
  const [data, setData] = useState<Data[{}]>([]);
  const [searchValue, setSearchValue] = useState();

  //handle select when city or airport selected
  function handleSelectDeparture(name:string){
    setSelectedDestination({...selectedDestination, departure: name});
    setVisible({...visible, departure:false})
  }
   //handle select when city or airport selected
   function handleSelectReturn(name:string){
    setSelectedDestination({...selectedDestination, arrivalCity: name})
    setVisible({...visible, currentCity :false})
  }
  //toggle calendar close
  function toggleCalendarModal(name:  string){
    setVisibleCalendar({...visibleCalendar,  [name]: false})
  }

  useEffect(() => {
    if (searchValue === '' || searchValue === undefined ) {
      setData([...itinialCities]);
      return;
    }
    axios
      .get(`http://localhost:1338/api/airports?keyword=${searchValue}`)
      .then((response) =>{
        let data = response.data
        setData([...data])
      } )
      .catch((error) => console.error(error));

  }, [searchValue]);

  return (

    <View style={styles.container}>
    <View style={styles.row}>
      <TripOption tripOptionName='One Way' defOption={false}/>
      <TripOption tripOptionName='Return' defOption/>
    </View>
    <View style={styles.row} >
    <TextInput style={styles.input} placeholder="Current Location"  onPressIn={()=>setVisible({...visible, currentCity: true})}  value={selectedDestination.departure.length>0 ? selectedDestination.departure : ''}/>
    <Text> to </Text>
    <TextInput style={styles.input} placeholder="Destination" onPressIn={()=>setVisible({...visible, departure:true})} value={selectedDestination.arrivalCity.length>0 ? selectedDestination.arrivalCity : ''}/>
    </View>

    <View style={styles.row}>
    <View style={styles.input}>
    <Text>Departure:</Text>
    <IconButton 
        icon={props => <Ionicons style={{fontSize:24}} name="calendar-sharp" />} 
        onPress={() => setVisibleCalendar({...visibleCalendar, departure:true})}
      />
   </View>
   <View style={styles.input}>
       <Text>Return date:</Text>
    <IconButton 
        icon={props => <Ionicons style={{fontSize:24}} name="calendar-sharp" />} 
        onPress={() => setVisibleCalendar({...visibleCalendar, returnDate:true})}
      />
    </View>
    </View>
    <Modal modalHeader='Please select departure date:'
      visible={visibleCalendar.departure}
      setVisible={()=>toggleCalendarModal("departure")}>
      <DatePicker   onSelectedChange={date=>setSelectedDate(date) }

    mode="calendar"/>
    </Modal>
    <Modal modalHeader='Please select return date:'
      visible={visibleCalendar.returnDate}
      setVisible={()=>toggleCalendarModal("returnDate")}>
      <DatePicker   onSelectedChange={date=>setSelectedDate(date) }
    mode="calendar"/>
    </Modal>

    <Modal 
    modalHeader='Departure city'
    visible={visible.departure}
    setVisible={setVisible}>
    <TextInput placeholder='Enter city or airport' onChangeText={input=>input && setSearchValue(input) } />

    <FlatList
        data={data}
        renderItem={({item}) => 
        <SearchOutcomeItem  
            city={item.address.cityName} 
            airportName={item.name} 
            country={item.address.countryName}
            handleSelect={handleSelectReturn} />}
      />
    <Button title="Select" onPress={()=>{setVisible({...visible, departure:false})}}/>
    </Modal>
    <Modal 
    modalHeader='Current city'
    visible={visible.currentCity}
    setVisible={setVisible}>
    <TextInput placeholder='Enter city or airport' onChangeText={input=>input && setSearchValue(input) } />

    <FlatList
        data={data}
        renderItem={({item}) => <SearchOutcomeItem 
        city={item.address.cityName} 
        airportName={item.name} 
        country={item.address.countryName}
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
}


});
function useContext(AuthContext: React.Context<unknown>): { isLoggedin: any; setLogin: any; } {
  throw new Error('Function not implemented.');
}

