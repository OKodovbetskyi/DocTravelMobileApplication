import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Icon, Input, Text } from 'react-native-elements'

const AssistantAi = () => {
  return (
    <View style={styles.chat}>
         <Text>Ai</Text>
         <Input
      placeholder='INPUT WITH CUSTOM ICON'
      rightIcon={
        <Pressable>
              <Icon
          name='user'
          size={24}
          color='black'
        />
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