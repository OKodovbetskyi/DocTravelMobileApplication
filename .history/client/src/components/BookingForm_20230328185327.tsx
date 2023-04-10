import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
//import { Dropdown } from 'react-native-material-dropdown';
import { Text } from 'react-native-elements'

const BookingForm = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return (
    <ScrollView style={{height:'100%'}}> 
    <Text>Booking</Text>
    <TextInput
      label="Full Name"
       />
     <TextInput
      label="Date of Birth" />
     <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    </ScrollView>
   
  )
}

export default BookingForm