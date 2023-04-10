import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Booking from '../components/Booking';
import { API } from '../api/API';
import { useLoad } from '../components/hooks/useLoad';

const endpoint =  `/bookings`


export const Bookings = () => {
  const {loading,status, load, data} = useLoad(endpoint);

  useEffect(()=>load(),[]);
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
