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
const BookingForm = ({route}) => {
  const dispatch =useDispatch();
  const state = useSelector(state=>state.bookingUserInformationSlice);
  const [value, setValue] = useState([]);
  const data = route.params;
  const payHandler = () =>{
    console.log(state);
    dispatch(bookingUserInformationActions.setData({name:'ticket', data:data}))
  }
  const handleInput = (data: string, inputName: string) =>{
    dispatch(bookingUserInformationActions.setData({name:inputName, data:data}))
    console.log(state);
  }
  const handleRadioSelect = (data: string) =>{
    dispatch(bookingUserInformationActions.toggleGender(data))
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
      value={state.fullname}
      label="Full Name"
       />
     <TextInput
      onChangeText={(text)=>handleInput(text ,'dob')}
      value={state.dob}
      label="Date of Birth" />
      <View>
        <Text>Gender</Text>
        <View style={styles.radioSelect}>
          <Pressable style={styles.radioItem} onPress={()=>handleRadioSelect('male')}>
          <Text style={styles.item}>Male</Text>
          {state.gender.male ?  <Ionicons name="radio-button-on" size={24} color="black" />
          :
           <Ionicons name="radio-button-off-sharp" size={24} color="black" />
        }
         
          </Pressable>
          <Pressable style={styles.radioItem} onPress={()=>handleRadioSelect('female')}>
          <Text style={styles.item}>Female</Text>
          {state.gender.female ?  <Ionicons name="radio-button-on" size={24} color="black" />
          :
           <Ionicons name="radio-button-off-sharp" size={24} color="black" />
        }
          </Pressable>
      </View>
      </View>
      <TextInput style={styles.input}
       onChangeText={(text)=>handleInput(text ,'email')}
       value={state.email}
      label="Email address" />
        <TextInput  style={styles.input}
         onChangeText={(text)=>handleInput(text ,'phonenumber')}
         value={state.phonenumber}
      label="Phone Number" />
        <TextInput  style={styles.input}
         onChangeText={(text)=>handleInput(text ,'passportnumber')}
         value={state.passportnumber}
      label="Passport Number" />
        <TextInput  style={styles.input}
        onChangeText={(text)=>handleInput(text ,'passportexpirydate')}
        value={state.passportexpirydate}
      label="Passport expiry date" />
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