import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button, Text } from 'react-native-elements'

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
        <Text>Gender</Text>
        <View>
        <Text>Male<Ionicons name="radio-button-off-sharp" size={24} color="black" /></Text>
        <Text>Female<Ionicons name="radio-button-on" size={24} color="black" /></Text>
        </View>
      </View>
      <TextInput
      label="Email address" />
        <TextInput
      label="Phone Number" />
        <TextInput
      label="Passport Number" />
        <TextInput
      label="Passport expiry date" />
        <Button
              title="Pay"
              icon={{
                name: 'apple1',
                type: 'antdesign',
                size: 24,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'black',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
                width:150
              }}
              containerStyle={{
                width: '100%',
                alignItems:'center'
              }}
            />

    </ScrollView>
   
  )
}

export default BookingForm