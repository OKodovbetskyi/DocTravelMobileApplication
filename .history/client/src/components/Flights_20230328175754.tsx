import React, { useEffect, useState } from 'react'
import CardWrapper from './Wrapper/CardWrapper'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import styles from './FlightsStyles'
import { Button } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';

import LinearProgress from 'react-native-elements/dist/linearProgress/LinearProgress'
import SaveAndBook from './SaveAndBook'
import axios from 'axios'
const IP_ADDRESS = process.env.IP_ADDRESS
const URL = `http://${IP_ADDRESS}:3000/`
const endpoint = 'api/airlinecode'
interface flightsProps{
    ticket: object,
    saved: boolean,
    navigation: any
}
const Flights: React.FC<flightsProps> = ({ticket, saved, navigation}) => {
    const [visible , setVisible] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const [airlineCode, setAirline] = useState('');
    const toggleBookButton = () =>{setVisible(!visible)}
    useEffect(()=>{
      setIsLoading(true)
      console.log(`${URL}${endpoint}`)
      axios.get(`${URL}${endpoint}`, {
        params: {
          airlineCode:ticket.itineraries[0].segments[0].carrierCode }
      }).then(res=>{
        if (res.status ===200){
          setAirline(prev=>res.data.data);
         // setAirline(res.data);
        }
        setIsLoading(false);
        
      }).catch(err=>console.error(err));
    },[])
    if (!loading){
      console.log(ticket.itineraries[0].segments[0].id);
    }
  return (
    <TouchableOpacity style={styles.ticketContainer} onPress={toggleBookButton}>
         <Text style={styles.provider}>{airlineCode!=='' ? airlineCode : 'Fetching data'}</Text> 
        <View>
            <View>
            <View style={styles.row}>
                <Text style={styles.title}>{ticket.itineraries[0].segments[0].departure.iataCode}</Text>
                <Ionicons name="md-airplane" size={24} color="#BF40BF" />
                <Text style={styles.title}>{ticket.itineraries[0].segments[0].arrival.iataCode}</Text>
            </View>
       </View>
        </View>

        <View style={[styles.row,styles.space]}>
        <View style={styles.item}>
        <Text>Flight No</Text>
        <Text>{ticket.itineraries[0].segments[0].carrierCode+ticket.itineraries[0].segments[0].number}</Text>
        </View>
        <View style={styles.item}>
        <Text>Departure time</Text>
        <Text>{ticket.itineraries[0].segments[0].departure.at.split("T")[1]}</Text>
        </View>
        <View style={styles.item}>
        <Text>Arrival time</Text>
        <Text>{ticket.itineraries[0].segments[0].arrival.at.split("T")[1]}</Text>
        </View>
        </View>
        <Text>Duration:{ticket.itineraries[0].segments[0].duration.split("T")[1]}</Text>
        <View style={styles.row}>
        <Text style={styles.price}>£{ticket.price.total}</Text>    
        </View>
        { visible &&  <SaveAndBook ticket={ticket} saved={saved}/> }
       

    </TouchableOpacity>
  )
}

export default Flights