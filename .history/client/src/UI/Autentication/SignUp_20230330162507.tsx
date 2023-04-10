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

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
const [isSelected, setIsSelected] = useState(false);
const [signupData, setSignUpData] = useState({
  FullName: '',
  Email: '',
  Password: '',
  ConfirmPassword: '',
})

const handleInput = (fieldName:string, text:string) =>{
  setSignUpData({...signupData, [fieldName]: text });
}
let validateInput = {
  FullName: (name)=>name.length>0 ,
  Email: ()=> (name)=>name.length>0 ,
  Password: (name)=>name.length>0 ,
  ConfirmPassword:(name)=>name. ,

}
let submitFeedBack = "";
let emailFeedBack = "";
let fullnameFeedBack ="";
const handleSubmit = (data: object)=>{
  if (data.Password !== data.ConfirmPassword){
    submitFeedBack = "Your passwords does not match"
  }
  if (data.Email.length<1){
    emailFeedBack = "Please enter email"
  }
  if (data.FullName.length<1){
    fullnameFeedBack ="Please enter full name"
  }
}
const validateInput  = (input:string) =>{
 
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