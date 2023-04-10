import React from 'react'
import { Pressable, StyleSheet, View,KeyboardAvoidingView } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

const AssistantAi = () => {
  return (
    <>
    <View style={styles.chat}>
         <Text>Ai</Text>
</View>
<KeyboardAvoidingView
  style={styles.container}
  behavior={'padding'}>
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
    </>
  )
}
const styles = StyleSheet.create({
    chat:{
        height:"90%",
        backgroundColor:'purple'
    },
    chatInput:{
        backgroundColor: 'white',
        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
})
export default AssistantAi