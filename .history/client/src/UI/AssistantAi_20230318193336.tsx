import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Text } from 'react-native-elements'

const AssistantAi = () => {
  return (
    <View style={styles.chat}>
         <Text>Ai</Text>
         <Input
    </View>
   
  )
}
const styles = StyleSheet.create({
    chat:{
        height:"100%",
        backgroundColor:'purple'
    }
})
export default AssistantAi