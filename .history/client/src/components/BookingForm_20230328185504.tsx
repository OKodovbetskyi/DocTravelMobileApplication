import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import {DropDownPicker} from 'react-native-dropdown-picker'

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


<DropDownPicker
  multiple={true}
  min={0}
  max={5}

/>
    </ScrollView>
   
  )
}

export default BookingForm