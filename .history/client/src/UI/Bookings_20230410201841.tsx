import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Booking from '../components/Booking';
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const endpoint =  `api/bookings`


export const Bookings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const load = () =>{
    useEffect(()=>{
      setLoading(true)
        axios.get(URL+endpoint)
          .then(response => {
           setData(response.data.result);
           setLoading(false)
          })
          .catch(error => {
            console.error(error);
            setLoading(false)
          });
    },[])
  }
  load()
  console.log(data);
  return (
    <View>
    <Text variant='h5'>MY BOOKINGS</Text>
    {
      loading ? <Text>Loading....</Text>
      : <FlatList
      data={data}
      renderItem={({item})=>  <Booking booking={item}/>} 
      />
    
    }
   
    </View>
  )
}
