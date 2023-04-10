import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const Booking = () => {
const [ticketsVisible, setTicketsVisible] = useState(false);
const handleToggleTickets = () => {setTicketsVisible(ticket=>!ticket)}
  return (
    <Pressable style={styles.container}>
        <Text h4>Oleksandr</Text>
        <Text h4>Kodovbetskyi's</Text>
        <Text h4>Trips</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
   container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor: 'white',
    padding: 10,
    margin:5,
   } 
})
export default Booking