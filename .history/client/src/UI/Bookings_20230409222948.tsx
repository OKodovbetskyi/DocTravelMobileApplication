import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Booking from '../components/Booking';
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const endpoint =  `api/bookings`


export const Bookings = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      axios.get(URL+endpoint)
        .then(response => {
         setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  },[])
  return (
    <View>
    <Text variant='h5'>MY BOOKINGS</Text>
    <Booking booking={data}/>
    </View>
  )
}
