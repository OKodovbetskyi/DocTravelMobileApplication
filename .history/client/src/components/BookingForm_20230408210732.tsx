import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button, Text } from 'react-native-elements'
const BookingForm = () => {
  const [value, setValue] = useState([]);

  return (
    <ScrollView style={{height:'100%'}}> 
    <Text h3>Booking</Text>
    <Text h4>Flight Details</Text>
    <Text h4>Flight No: {} Destination: {}</Text>
    <TextInput
      label="Full Name"
       />
     <TextInput
      label="Date of Birth" />
      <View>
        <Text>Gender</Text>
        <View style={styles.radioSelect}>
          <View style={styles.radioItem}>
          <Text style={styles.item}>Male</Text>
          <Ionicons name="radio-button-off-sharp" size={24} color="black" />
          </View>
          <View style={styles.radioItem}>
          <Text style={styles.item}>Female</Text>
          <Ionicons name="radio-button-off-sharp" size={24} color="black" />
          </View>
      </View>
      </View>
      <TextInput style={styles.input}
      label="Email address" />
        <TextInput  style={styles.input}
      label="Phone Number" />
        <TextInput  style={styles.input}
      label="Passport Number" />
        <TextInput  style={styles.input}
      label="Passport expiry date" />
        <Button
       
         style={styles.input}
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
const styles = StyleSheet.create({
  input:{
    marginVertical: 5,
  },
  radioSelect:{
    marginVertical: 5,
    justifyContent:'space-around',
    display:"flex",
    flexDirection:'row'
  },
  radioItem:{
    alignItems:'center',
    width:100,
    flexDirection:"row"
  },
  item:{
    marginHorizontal:8
  }
})
export default BookingForm