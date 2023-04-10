import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import Flights from './Flights';

const Booking = () => {
const [ticketsVisible, setTicketsVisible] = useState(false);
const handleToggleTickets = () => {setTicketsVisible(ticket=>!ticket)}
  return (
    <Pressable style={styles.container} onPress={handleToggleTickets}>
        <View style={styles.ticketInfo} >
        <Text h4>Oleksandr</Text>
        <Text h4>Kodovbetskyi's</Text>
        <Text h4>Trips</Text>
        </View>
        
        {
            ticketsVisible && <View style={styles.tickets}>
                 <Text h4>Oleksandr</Text>
                <Text h4>Kodovbetskyi's</Text>
                 <Text h4>Trips</Text>
            </View>
        }
    </Pressable>
  )
}
const styles = StyleSheet.create({
   container:{
    backgroundColor: 'white',
    padding: 10,
    margin:5,
   } ,
   ticketInfo:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
   },
   tickets:{
    
   }
})
export default Booking