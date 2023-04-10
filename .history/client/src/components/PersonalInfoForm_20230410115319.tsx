import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from '@react-native-material/core';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bookingUserInformationActions } from '../store';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Button, Input } from 'react-native-elements'
import Constants from 'expo-constants';
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const bookingEndp = `api/bookings`
const PersonalInfoForm = ({personalInfo, ticket, type}) => {
    const dispatch =useDispatch();
    const fullstate = useSelector(state=>state.bookingUserInformationSlice);
    const personal = useSelector(state=>state.bookingUserInformationSlice.personalinfo)
    const [errors, setErrors] = useState(
        {
            fullname: "",
                dob: "",
                gender: {
                    male: false,
                    female: false,
                },
                email: "",
                phonenumber:"",
                passportnumber:"",
                passportexpirydate:"",
                countryissued:"",
        }
    )
    const validate = () => {
        if (!personal.fullname){
            handleError("Please enter your fullname", "fullname")
        }
    }
    const handleError = (errorMessage: string, input:string)=>{
        setErrors(prev=>({...prev, [input]: errorMessage}));
    }
    const payHandler = () =>{
        dispatch(bookingUserInformationActions.setTicket(ticket))
        console.log("BEFORE SUBMITTING>>>>>>>>>>>>>>>",fullstate);
        axios.post(`${URL}${bookingEndp}`, fullstate)
      .then((response) => {
        console.log('POST request successful:', response.data);
        dispatch(bookingUserInformationActions.clearData);
      })
      .catch((error) => {
        console.error('POST request failed:', error);
      });
      }
      const handleInput = (data: string, inputName: string) =>{
        dispatch(bookingUserInformationActions.setData({name:inputName, data:data}))
      }
      const handleRadioSelect = (data: string) =>{
        dispatch(bookingUserInformationActions.toggleGender(data))
      }
  return (
    <View>
        <TextInput 

      onChangeText={(text)=>handleInput(text ,'fullname')}
      value={personal.fullname}
      label="Full Name"
      error={errors.fullname}
       />
     <TextInput
      onChangeText={(text)=>handleInput(text ,'dob')}
      value={personal.dob}
      label="Date of Birth" />
      <View>
        <Text>Gender</Text>
        <View style={styles.radioSelect}>
          <Pressable style={styles.radioItem} onPress={()=>handleRadioSelect('male')}>
          <Text style={styles.item}>Male</Text>
          {personal.gender.male ?  <Ionicons name="radio-button-on" size={24} color="black" />
          :
           <Ionicons name="radio-button-off-sharp" size={24} color="black" />
        }
         
          </Pressable>
          <Pressable style={styles.radioItem} onPress={()=>handleRadioSelect('female')}>
          <Text style={styles.item}>Female</Text>
          {personal.gender.female ?  <Ionicons name="radio-button-on" size={24} color="black" />
          :
           <Ionicons name="radio-button-off-sharp" size={24} color="black" />
        }
          </Pressable>
      </View>
      </View>
      <TextInput style={styles.input}
       onChangeText={(text)=>handleInput(text ,'email')}
       value={personal.email}
      label="Email address" />
        <TextInput  style={styles.input}
         onChangeText={(text)=>handleInput(text ,'phonenumber')}
         value={personal.phonenumber}
      label="Phone Number" />
        <TextInput  style={styles.input}
         onChangeText={(text)=>handleInput(text ,'passportnumber')}
         value={personal.passportnumber}
      label="Passport Number" />
        <TextInput  style={styles.input}
        onChangeText={(text)=>handleInput(text ,'passportexpirydate')}
        value={personal.passportexpirydate}
      label="Passport expiry date" />
      {
        type==='save' ?
        <Button
        onPress={()=>payHandler()}
       style={styles.input}
            title="Save Changes"
            iconContainerStyle={{ marginRight: 10 }}
            titleStyle={{ fontWeight: '700' }}
            buttonStyle={{
              backgroundColor:'green',
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
        :
        <Button
        onPress={()=>payHandler()}
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
      }
       
    </View>
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
    }});
export default PersonalInfoForm