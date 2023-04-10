import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
export const Bookings = () => {
  return (
    <View style={{height:'100%'}}> 
          <Text>Booking</Text>
          <TextInput
            label="Label"
            variant="outlined" />
    </View>


  )
}
