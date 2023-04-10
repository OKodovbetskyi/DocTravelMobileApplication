import React from 'react'
import { Pressable, StyleSheet, View,KeyboardAvoidingView, Touchable, TouchableOpacity } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { Chip, Text } from "@react-native-material/core";
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
    <View style={styles.faq}>
        <Text style={styles.text} variant='h6'>Ask AI Assistant</Text>
    <View style={styles.questions}>
        <Chip  style={styles.question} variant="filled" label="Top 10 budget countries to travel"  />
        <Chip  style={styles.question} variant="filled" label="Top 10 budget countries to travel"  />
    </View >
     
   
    </View>
</View>
 
         <View>
         <Input 
        inputContainerStyle={styles.chatInput}
      placeholder='Enter your question here'
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
        height:'85%',
    },
    text:{
        color:'white'
    },
    faq:{
        padding: 5,
    },
   questions:{
    display:'flex',
    flexDirection:'row'
   }
})
export default AssistantAi