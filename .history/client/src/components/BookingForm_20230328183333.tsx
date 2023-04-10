import { TextInput } from '@react-native-material/core'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const BookingForm = () => {
  return (
    <View style={{height:'100%'}}> 
    <Text>Booking</Text>
    <TextInput
      label="Label"
      variant="outlined" />
     <TextInput
      label="Label"
      variant="outlined" />
     <TextInput
      label="Label"
      variant="outlined" />
    </View>
   
  )
}

export default BookingForm