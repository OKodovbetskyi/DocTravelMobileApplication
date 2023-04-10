import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
export const Bookings = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
      axios.get(URL+airports_endp, {
        params:{
          keyword: flightquery.searchValue
        }
      })
        .then(response => {
          console.log(response.data)
          handleCityNamesChange(response.data)
        })
        .catch(error => {
          console.error(error);
        });
  },[])
  return (
    <Text>MY BOOKINGS</Text>

  )
}
