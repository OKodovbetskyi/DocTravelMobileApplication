import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
interface TripOptionProps{
    tripOptionName: string,
    defOption : boolean ,

    
}
const TripOption: React.FC<TripOptionProps> = ({tripOptionName, defOption}) => {
    const [isTripOptionSelected, setTripOptionSelected] = useState(defOption ? true : false); 
  return (
    <Text onPress={()=>setTripOptionSelected(!isTripOptionSelected)} style={[isTripOptionSelected && {fontWeight: 'bold'}, styles.tripOptions]}> {tripOptionName}</Text>
  )
}

export default TripOption
const styles = StyleSheet.create({
    tripOptions:{
      padding:  10,
      paddingLeft:0,
      color: '#BF40BF'
    }})