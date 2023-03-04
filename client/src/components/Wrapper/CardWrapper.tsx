import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Text, View, ViewProps } from 'react-native'
import styles from './CardWrapperStyles'
interface Props{
children:React.ReactNode,
screenTitle: string,
cardSize: string,
}

const CardWrapper:React.FC<Props> = ({children,  screenTitle, cardSize}) => {
    const [isKeyBoardOpen, setKeyboard] = useState(false);
    const keyboardShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
           setKeyboard(true)
        }
    );
    const keyboardHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
            setKeyboard(false);
        }
    );
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
   
      <View style={[styles.Card, {height: cardSize}]}>
      {children}
    </View>
    </KeyboardAvoidingView>
  )
}

export default CardWrapper