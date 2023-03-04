import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
interface locationDetailsProps{
    city: string,
    airportName: string,
    country: string,
    handleSelect: (name:string)=>void
}

const SearchOutcomeItem: React.FC<locationDetailsProps> = ({city,airportName,country, handleSelect}) => {
 
  return (
    <Pressable style={styles.container} onPress={()=>handleSelect(airportName)}>
        <Text style={styles.item}>{city},</Text>
        <Text style={styles.item}>{airportName},</Text>
        <Text style={styles.item}>{country}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:"row",
        marginVertical: 4,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
    },
    item:{
        margin: 3,
        fontSize: 20
    }
})
export default SearchOutcomeItem