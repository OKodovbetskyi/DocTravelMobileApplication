import { Button, Text, TextInput } from '@react-native-material/core'
import React from 'react'
import { View } from 'react-native'
import styles from './AuthenticationStyles'
import CardWrapper from '../../components/Wrapper/CardWrapper'
import ScreenWrapper from '../../components/Wrapper/ScreenWrapper'
const ForgotPassword = ({navigation }) => {
  return (
    <ScreenWrapper>
        <CardWrapper screenTitle='Forgot Password'>
          <View style={styles.loginandforgot}></View>
        <TextInput variant="outlined" label="Please enter your username" style={{ marginVertical: 16 }} />
       <Button title='Recover password' onPress={()=>{navigation.navigate("Login")}}/>
        </CardWrapper>
    </ScreenWrapper>
  )
}

export default ForgotPassword