import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const Booking = () => {
  return (
    <View style={styles.container}>
        <Text h4>First Name</Text>
        <Text h4>Last Name</Text>
        <Text h4>Trips</Text>
    </View>
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