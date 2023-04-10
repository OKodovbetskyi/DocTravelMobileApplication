import { Text, TextInput } from '@react-native-material/core'
import { createNavigationContainerRef } from '@react-navigation/native'
import axios from 'axios';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import Booking from '../components/Booking';
import { useSelector } from 'react-redux';
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const endpoint =  `api/bookings`


export const Bookings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const personal = useSelector(state=>state.bookingUserInformationSlice.personalinfo)
  const [errors, setErrors] = useState(
    Object.keys(personal).reduce((accum, key)=>({...accum, [key]: null}),{})
  );
const validate = {
    isValid:{
        fullname: (name) => name.length > 0,
        dob: (dob) => dob.length>0,
        email: (email)=>email.length>0, 
        gender: (gender)=> gender.female === true || gender.male === true,
        phonenumber: (phonenumber)=> phonenumber.length>0,
        passportnumber:(name) => name.length > 0,
        passportexpirydate:(name) => name.length > 0,
        countryissued:(name) => name.length > 0,  
    },
    errorMessage:{
        fullname: "Please enter full name",
        dob: "Please enter your date of birth",
        email: "Please enter your email",  
        gender: "Please select gender: 'male' or 'female'",
        phonenumber: "Please enter phone number",
        passportnumber:"Please enter passport number",
        passportexpirydate:"Please enter expiry date",
        countryissued: "Please enter country issued" , 
    }
}
const isValidRecord = (record) =>{
    let isRecordValid  =true;
    Object.keys(personal).forEach((key)=>{
        console.log(key)
      if (validate.isValid[key](record[key])){
        errors[key] = null;
      } else {
        errors[key] = validate.errorMessage[key];
        isRecordValid = false;
      }
    })
    return isRecordValid;
  }
  const updateHandler = () =>{
    if (isValidRecord(personal)){
        axios.put(`${URL}${bookingEndp}/${id}`, fullstate.personalinfo)
        .then((response) => {
          console.log('POST request successful:', response.data);
          dispatch(bookingUserInformationActions.clearData);
          load();
          
        })
        .catch((error) => {
          console.error('POST request failed:', error);
        });
       } else{
         setErrors({...errors})
       }
     console.log(errors);
}
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
      renderItem={({item})=>  <Booking booking={item} updateHandler={updateHandler}/>} 
      />
    
    }
   
    </View>
  )
}
