import { TextInput } from '@react-native-material/core'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Text } from 'react-native-elements'

const BookingForm = () => {
  return (
    <ScrollView style={{height:'100%'}}> 
    <Text>Booking</Text>
    <TextInput
      label="Full Name"
       />
     <TextInput
      label="Label" />
     <TextInput
      label="Label" />
    </ScrollView>
   
  )
}

export default BookingForm