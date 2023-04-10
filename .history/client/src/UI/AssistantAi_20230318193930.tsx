import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

const AssistantAi = () => {
  return (
    <View style={styles.chat}>
         <Text>Ai</Text>
         <Input
      placeholder='INPUT WITH CUSTOM ICON'
      rightIcon={
        <Pressable onPress={()=>console.log('pressed')}>
            <Feather name="send" size={24} color="black" />
           <Text>Send</Text> 
          
        </Pressable>
      
      }
    />
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