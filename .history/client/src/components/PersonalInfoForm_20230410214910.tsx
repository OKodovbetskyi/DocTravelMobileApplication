import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bookingUserInformationActions } from '../store';
import { Ionicons } from '@expo/vector-icons';
import { Button,Input } from 'react-native-elements'
import Constants from 'expo-constants';
const IP_ADDRESS = Constants.expoConfig.extra.apiUrl;
const URL = `http://${IP_ADDRESS}:3000/`
const bookingEndp = `api/bookings`
const PersonalInfoForm = ({personalInfo, ticket, type,id, load}) => {
    const dispatch =useDispatch();
    const fullstate = useSelector(state=>state.bookingUserInformationSlice);
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
    const updateHandler = () =>{
        if (isValidRecord(personal)){
            axios.put(`${URL}${bookingEndp}/${id}`, fullstate.personalinfo)
            .then((response) => {
              console.log('POST request successful:', response.data);
              dispatch(bookingUserInformationActions.clearData);
              load('/bookings')
            })
            .catch((error) => {
              console.error('POST request failed:', error);
            });
           } else{
             setErrors({...errors})
           }
         console.log(errors);
    }
      const handleInput = (data: string, inputName: string) =>{
        dispatch(bookingUserInformationActions.setData({name:inputName, data:data}))
      }
      const handleRadioSelect = (data: string) =>{
        dispatch(bookingUserInformationActions.toggleGender(data))
      }
      const handleError = (errorMessage: string, input: string)=>{
        setErrors((prev)=>({...prev, [input]:errorMessage}));
      }
   useEffect(()=>{
    if (personalInfo){
        dispatch(bookingUserInformationActions.setInitialState(personalInfo))
    } else {
        dispatch(bookingUserInformationActions.clearData())
    }
   },[])
  return (
    <KeyboardAvoidingView
    keyboardVerticalOffset={100}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
        <Input
      onChangeText={(text)=>handleInput(text ,'fullname')}
      value={personal.fullname}
      label="Full Name"
      errorMessage={errors.fullname}
      onFocus={()=>{
        handleError(null, 'fullname');
    }}
       />
     <Input
     style={styles.input}
      onChangeText={(text)=>handleInput(text ,'dob')}
      value={personal.dob}
      label="Date of Birth"
      errorMessage={errors.dob}
      onFocus={()=>{
        handleError(null, 'dob');
    }}/>
      <View>
        {errors.gender && <Text>{errors.gender}</Text>}
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
      <Input style={styles.input}
       onChangeText={(text)=>handleInput(text ,'email')}
       value={personal.email}
       errorMessage={errors.email}
       onFocus={()=>{
         handleError(null, 'email');
     }}
      label="Email address" />
        <Input  style={styles.input}
         onChangeText={(text)=>handleInput(text ,'phonenumber')}
         value={personal.phonenumber}
      label="Phone Number" 
      errorMessage={errors.phonenumber}
      onFocus={()=>{
        handleError(null, 'phonenumber');
    }}/>
        <Input  style={styles.input}
         onChangeText={(text)=>handleInput(text ,'passportnumber')}
         value={personal.passportnumber}
      label="Passport Number" 
      errorMessage={errors.passportnumber}
      onFocus={()=>{
        handleError(null, 'passportnumber');
    }}/>
        <Input  style={styles.input}
        onChangeText={(text)=>handleInput(text ,'passportexpirydate')}
        value={personal.passportexpirydate}
      label="Passport expiry date" 
      errorMessage={errors.passportexpirydate}
      onFocus={()=>{
        handleError(null, 'passportexpirydate');
    }}/>
       <Input  style={styles.input}
        onChangeText={(text)=>handleInput(text ,'countryissued')}
        value={personal.countryissued}
      label="Passport country issue" 
      errorMessage={errors.countryissued}
      onFocus={()=>{
        handleError(null, 'countryissued');
    }}/>
      {
        type==='save' ?
        <Button
        onPress={()=>updateHandler()}
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
       
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
    input:{
 
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