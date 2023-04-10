import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import CardWrapper from '../components/Wrapper/CardWrapper';

const AssistantAi = () => {
  return (
    <>
    <View style={styles.chat}>
         <Text>Ai</Text>
</View>
         <CardWrapper>
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
    </CardWrapper>
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
        
    }
})
export default AssistantAi