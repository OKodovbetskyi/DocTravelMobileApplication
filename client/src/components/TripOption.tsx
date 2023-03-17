import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
interface TripOptionProps{
    tripOptionName: string,
    defOption : boolean ,
    handleSelect :   () =>void ,

    
}
const TripOption: React.FC<TripOptionProps> = ({tripOptionName, defOption, handleSelect}) => { 
  return (
    <Text onPress={handleSelect} style={[defOption && {fontWeight: 'bold'}, styles.tripOptions]}> {tripOptionName}</Text>
  )
}

export default TripOption
const styles = StyleSheet.create({
    tripOptions:{
      padding:  10,
      paddingLeft:0,
      color: '#BF40BF'
    }})