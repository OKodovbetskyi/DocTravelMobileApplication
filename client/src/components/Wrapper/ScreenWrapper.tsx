import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Constants  from 'expo-constants'
interface ScreenWrapperProps{
    children: React.ReactNode
   
}
const ScreenWrapper : React.FC<ScreenWrapperProps> = ({children}) => {

  return (
    <View style={styles.screenContainer}>
         {children}
    </View>
   
  )
}
const styles = StyleSheet.create({
    screenContainer:{
        marginTop: Constants.statusBarHeight,
        justifyContent: "center",
        flex: 1
    },
   
})
export default ScreenWrapper