import React, { useState } from 'react'
import CardWrapper from '../../components/Wrapper/CardWrapper'
import { Button, TextInput } from '@react-native-material/core'
import ScreenWrapper from '../../components/Wrapper/ScreenWrapper'
import { View} from 'react-native'
import styles from './AuthenticationStyles'
interface SignUpProps{
    navigation: React.ReactNode
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
const [isSelected, setIsSelected] = useState(false);
  return (
    <ScreenWrapper >
    <CardWrapper screenTitle='Create a new account'>
    <Text style={[styles.header, styles.text]}>Healthy Travel</Text>
      <View style={styles.signup}>
        <TextInput variant="outlined" label="Full Name" textContentType='password' style={{ }} />
        <TextInput variant="outlined" label="Email" textContentType='password' style={{ }} />
        <TextInput variant="outlined" label="Password" textContentType='password' style={{ }} />
        <TextInput variant="outlined" label="Confirm Password" textContentType='password' style={{ }} />
        <View>
        <Button title="Sign Up" onPress={()=>{navigation.navigate("Login")}}/>
        </View>
        </View>
    </CardWrapper>
    </ScreenWrapper>
  )
}

export default SignUp