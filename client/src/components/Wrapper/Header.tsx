import { Avatar } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from 'react-native'
const width = Dimensions.get("window").width;
const Header = () => {
  return (
    <View style={styles.headerContainer}>
    
    <Text  style={styles.username}> Alex K</Text>
    <Avatar label="A K" autoColor />
    </View>
  )
}
const styles = StyleSheet.create({
    headerContainer:{
        width: width,
        padding:15,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",

    },
    username:{
        margin: 10,
        marginLeft:"auto"
    }
})
export default Header