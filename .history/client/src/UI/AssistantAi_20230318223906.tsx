import React from 'react'
import { Pressable, StyleSheet, View,KeyboardAvoidingView, Touchable, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import { Chip, Text } from "@react-native-material/core";
import { Feather } from '@expo/vector-icons';
import { Message } from '../components/Message';

const AssistantAi = () => {
  return (
  
    <KeyboardAvoidingView 
    contentContainerStyle ={styles.container} 
    behavior={'padding'}
    keyboardVerticalOffset={135}>
    <View style={styles.chat}>
        <View style={styles.messages}>
    <Message message="Hey Whats app" isSent={true} />
    <Message message="Hey Whats app" isSent={false} />
    <Message message="Hey Whats app" isSent={false} />
    <Message message="Hey Whats app" isSent={true} />
    <Message message="Hey Whats app" isSent={false} />
    <Message message="Hey Whats app" isSent={false} />
    <Message message="Hey Whats appasdasdasdasdasasd asfvasdac asdasd asdasdas asdasd fasfdas " isSent={true} />
    <Message message="Hey Whats appasdasdasdasdasasd asfvasdac asdasd asdasdas asdasd fasfdas " isSent={false} />
    <Message message="Hey Whats app" isSent={true} />
    <Message message="Hey Whats app" isSent={false} />
    <Message message="Hey Whats app" isSent={true} />
    <Message message="Hey Whats app" isSent={false} />
        </View>
   
    <View style={styles.chatbody}>

    </View>
    <View style={styles.faq}>
        <Text style={styles.text} variant='h6'>Ask AI Assistant</Text>
    <View style={styles.questions}>
        <Chip  style={styles.question} variant="filled" label="Top 10 budget countries to travel"  />
        <Chip  style={styles.question} variant="filled" label="Countries to visit in Spring"  />
        <Chip  style={styles.question} variant="filled" label="Where to stay on Croatia"  />
        
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
        height:'85%',
    },
    text:{
        color:'#88d8b0'
    },
    faq:{
        borderTopColor:'#88d8b0',
        borderTopWidth: 1,
        padding: 5,
    },
   questions:{
   
    display:'flex',
    flexDirection:'row'
   },
   question:{
    width:'30%',
    margin:5,
    backgroundColor:'#88d8b0'
   },
   messages:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '15%',
    height: 200, 
    flexDirection: 'column-reverse',
    padding: 5,
   }
})
export default AssistantAi