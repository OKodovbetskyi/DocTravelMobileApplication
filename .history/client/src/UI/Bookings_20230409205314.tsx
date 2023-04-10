import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const endpoint =  `api/bookings`


export const Bookings = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      axios.get(URL+endpoint)
        .then(response => {
         console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  },[])
  return (
    <Text>MY BOOKINGS</Text>
    
  )
}
