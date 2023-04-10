import React from 'react'
import { Pressable, StyleSheet, View,KeyboardAvoidingView } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

const AssistantAi = () => {
  return (
  
    <KeyboardAvoidingView 
    contentContainerStyle ={styles.container} 
    behavior={'padding'}
    keyboardVerticalOffset={135}>
    <View style={styles.chat}>
         <Text>Ai</Text>
    <View style={styles.chatbody}>

    </View>
</View>
 
         <View>
         <Input 
        inputContainerStyle={styles.chatInput}
      placeholder='INPUT WITH CUSTOM ICON'
      rightIcon={
        <Pressable  style={styles.chatInput} onPress={()=>console.log('pressed')}>
            <Feather name="send" size={24} color="black" />
           <Text>Send</Text> 
        </Pressable>
      
      }
    />
    </View>
    </KeyboardAvoidingView>

  )
}
const styles = StyleSheet.create({
    chat:{
        width:"100%",
        height:"95%",
        backgroundColor:'purple'
    },
    chatInput:{
        width:'100%',
        backgroundColor: 'white',
        
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
    chatbody:{
        backgroundColor:'white',
    }
})
export default AssistantAi