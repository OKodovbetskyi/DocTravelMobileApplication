import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const Booking = () => {
  return (
    <View style={styles.container}>
        <Text h4>First Name + Last Name Trips</Text>
    </View>
  )
}
const styles = StyleSheet.create({
   container:{
    height: 30,
    backgroundColor: 'white'
   } 
})
export default Booking