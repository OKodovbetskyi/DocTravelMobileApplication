import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Text } from 'react-native-elements'

const BookingForm = () => {
  const [value, setValue] = useState([]);
  return (
    <ScrollView style={{height:'100%'}}> 
    <Text>Booking</Text>
    <TextInput
      label="Full Name"
       />
     <TextInput
      label="Date of Birth" />
      <View>
        <Text>Male <Ionicons name="radio-button-on" size={24} color="black" /></Text>
      </View>

    </ScrollView>
   
  )
}

export default BookingForm