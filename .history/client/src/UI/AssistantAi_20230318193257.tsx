import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import styles from '../components/FlightsStyles'
const AssistantAi = () => {
  return (
    <View style={styles.chat}>
         <Text>Ai</Text>
    </View>
   
  )
}
const styles = StyleSheet.create({
    chat:{
        height:"100%"
    }
})
export default AssistantAi