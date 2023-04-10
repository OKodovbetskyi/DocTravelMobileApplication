import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

const AssistantAi = () => {
  return (
    <>
    <View style={styles.chat}>
         <Text>Ai</Text>
</View>
         <View>
     
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    chat:{
        height:"80%",
        backgroundColor:'purple'
    },
    chatInput:{
        backgroundColor: 'white',
        
    }
})
export default AssistantAi