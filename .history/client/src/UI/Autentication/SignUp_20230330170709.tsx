import React, { useState } from 'react'
import CardWrapper from '../../components/Wrapper/CardWrapper'
import { Button, Text, TextInput } from '@react-native-material/core'
import ScreenWrapper from '../../components/Wrapper/ScreenWrapper'
import { View} from 'react-native'
import styles from './AuthenticationStyles'
import axios from 'axios'
interface SignUpProps{
    navigation: React.ReactNode
}
const initialRecord = {  
FullName: '',
Email: '',
Password: '',
ConfirmPassword: ''}
const SignUp: React.FC<SignUpProps> = ({navigation}) => {
const [isSelected, setIsSelected] = useState(false);
const [record, setRecord] = useState(initialRecord);
const [errors, setErrors] = useState(
  Object.keys(initialRecord).reduce((accum, key)=>({...accum, [key]: null}),{})
)

const isValidRecord = (record) =>{
  let isRecordValid  =true;
  Object.keys(record).forEach((key)=>{
    if (isValid[key](record[key])){
      errors[key] = null;
    } else {
      errors[key] = errorMessage[key];
      isRecordValid = false;
    }
  })
  return isRecordValid;
}
const validation = {
  isValid :{
    FullName: (text) =>text.lenght
  },
  errorMessage :{
  

}

}
///////////////////////////////////////////////
const handleChange = (e:object) =>{
  const {name , value} = e.target;
  setRecord({...record, [name]: value})
  setErrors({...errors, [name]: isValid[name](value) ? null : errorMessage[name]})
}

const handleSubmit = (data: object)=>{
  if (isValidRecord(record)){
   console.log('valid');
   } else{
    setErrors({...errors})
   }
}

  return (
    <ScreenWrapper >
    <CardWrapper screenTitle='Create a new account'>
    <Text style={[styles.header, styles.text]}>Healthy Travel</Text>
      <View style={styles.signup}>
        <TextInput variant="outlined" label="Full Name" textContentType='password' onChangeText={(input=>handleInput('FullName', input))} />
        <TextInput variant="outlined" label="Email" textContentType='password' onChangeText={(input=>handleInput('email', input))} />
        <TextInput variant="outlined" label="Password" textContentType='password'  onChangeText={(input=>handleInput('Password', input))}/>
        <TextInput variant="outlined" label="Confirm Password" textContentType='password' onChangeText={(input=>handleInput('ConfirmPass', input))}/>
        <View>
        <Button title="Sign Up" onPress={()=>{navigation.navigate("Login")}}/>
        </View>
        </View>
    </CardWrapper>
    </ScreenWrapper>
  )
}

export default SignUp