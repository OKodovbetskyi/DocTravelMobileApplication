import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const Booking = () => {
  return (
    <View style={styles.container}>
        <Text h4>First Name</Text>
        <Text h4>Last Name</Text>
    </View>
  )
}
const styles = StyleSheet.create({
   container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor: 'white'
   } 
})
export default Booking