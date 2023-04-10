import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import Flights from './Flights';

const Booking = () => {
const [ticketsVisible, setTicketsVisible] = useState(false);
const handleToggleTickets = () => {setTicketsVisible(ticket=>!ticket)}
const handleEdit = () =>{console.log("edit")}
  return (
    <Pressable style={styles.container} onPress={handleToggleTickets}>
        <View style={styles.ticketInfo} >
        <Text h4>Oleksandr</Text>
        <Text h4>Kodovbetskyi's</Text>
        <Text h4>Trips</Text>
        </View>
        
        {
            ticketsVisible && <View style={styles.tickets}>
                <Pressable onPress={handleEdit} style={styles.editCont}><Text style={styles.edit}>Edit Personal Details</Text></Pressable>
                 <Text>Full Name: Oleksandr Kodovbetskyi</Text>
                <Text></Text>
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
    justifyContent:'space-between',
   },
   tickets:{
    borderTopColor:'purple',
    borderTopWidth: 2,
    marginTop:10,
    paddingTop:10,
   },
   edit:{
    color: 'blue',
    textDecorationLine:'underline',
    marginLeft: 'auto',
   },
   editCont:{
    height: 15
   }
})
export default Booking