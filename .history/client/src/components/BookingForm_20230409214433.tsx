import { TextInput } from '@react-native-material/core'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button } from 'react-native-elements'
import {Text} from '@react-native-material/core';
import Flights from './Flights';
import { useDispatch, useSelector } from 'react-redux';
import { bookingUserInformationActions } from '../store';
import axios from 'axios';
import Constants from 'expo-constants';
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const bookingEndp = `api/bookings`

const BookingForm = ({route}) => {
  const dispatch =useDispatch();
  const state = useSelector(state=>state.bookingUserInformationSlice);
  const [value, setValue] = useState([]);
  const data = route.params;
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={100}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <ScrollView> 
    <Text variant='h5'>Ticket</Text>
    <Flights ticket={data} />
    <Text variant='h6'>To Complete Booking, please enter your personal details</Text>
    

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