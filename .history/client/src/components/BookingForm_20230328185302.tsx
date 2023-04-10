import { TextInput } from '@react-native-material/core'
import React from 'react'
import { ScrollView, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
//import { Dropdown } from 'react-native-material-dropdown';
import { Text } from 'react-native-elements'

const BookingForm = () => {
  const data = [ { label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' },]
  return (
    <ScrollView style={{height:'100%'}}> 
    <Text>Booking</Text>
    <TextInput
      label="Full Name"
       />
     <TextInput
      label="Date of Birth" />
    <DropDownPicker
    </ScrollView>
   
  )
}

export default BookingForm