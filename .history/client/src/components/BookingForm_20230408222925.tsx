import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements'
import {Text} from '@react-native-material/core';
import Flights from './Flights';
import { useDispatch, useSelector } from 'react-redux';
import { bookingUserInformationActions } from '../store';
const BookingForm = ({route}) => {
  const dispatch =useDispatch();
  const state = useSelector(state=>state);
  const [value, setValue] = useState([]);
  const data = route.params;
  const payHandler = () =>{
 
  }
  const handleInput = (data: string, inputName: string) =>{
    dispatch(bookingUserInformationActions.setData({name:inputName, data:data}))
    console.log(state);
  }
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={100}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <ScrollView> 
    <Text variant='h5'>Ticket</Text>
    <Flights ticket={data} />
    <Text variant='h6'>To Complete Booking, please enter your personal details</Text>
    <TextInput 
      onChangeText={(text)=>handleInput(text ,'fullname')}
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
  </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  input:{
    marginVertical: 5,
  },
  container:{
    height:'100%'
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