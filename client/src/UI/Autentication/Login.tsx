import { Button, Text, TextInput } from '@react-native-material/core'
import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import  Constants  from 'expo-constants'
import styles from './AuthenticationStyles'
import CardWrapper from '../../components/Wrapper/CardWrapper'
import ScreenWrapper from '../../components/Wrapper/ScreenWrapper'
import { AuthContext } from '../../context/AutentificationContext'
interface Props{
  navigation: any
}
const Login: React.FC<Props> = ({navigation}) => {
  const {isLoggedin , setLogin}= useContext(AuthContext);
console.log(isLoggedin);
  return (
    <ScreenWrapper>
      <Text>Healthy Travel</Text>
      <CardWrapper screenTitle='DocTravel'>
      <View style={styles.login}>
      <TextInput variant="outlined" label="Username" style={{ margin: 16 }} />
      <TextInput variant="outlined" label="Password" textContentType='password' style={{ margin: 16 }} />
      <View style={styles.loginandforgot}>
      <Text onPress={()=>{
        navigation.navigate('ForgotPassword')
      }}
      >Forgot password?</Text>
      <Button style={styles.btn_login} onPress={()=>{
        setLogin(true)
      }} title="login" />
      </View>
      </View>
      </CardWrapper>
      
    </ScreenWrapper>
    
  )
}

export default Login