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
const endpoint = 'airlinecode'
interface flightsProps{
    ticket: object
}
const Flights: React.FC<flightsProps> = ({ticket}) => {
    const [visible , setVisible] = useState(false);
    const toggleBookButton = () =>{setVisible(!visible)}
    useEffect(()=>{
      console.log(`${URL}${endpoint}`)
      axios.get(`${URL}+${endpoint}`, {
        params: {
          airlineCode: 'BA'}
      }).then(res=>{
        console.log(res);
      }).catch(err=>console.error(err));
    },[])
  return (
    <TouchableOpacity style={styles.ticketContainer} onPress={toggleBookButton}>
        <Text style={styles.provider}>Plane Provider</Text>
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
        <Text style={styles.item} >Flight Number</Text>
        <Text style={styles.item}>Departure time</Text>
        <Text style={styles.item}>Arrival time</Text>
        </View>
        <View style={styles.row}>
        <Text style={styles.price}>£{ticket.price.total}</Text>    
        </View>
        { visible &&  <SaveAndBook ticket={ticket}/> }
       

    </TouchableOpacity>
  )
}

export default Flights