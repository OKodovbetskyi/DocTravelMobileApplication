import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
interface locationDetailsProps{
    airport: any,
    handleSelect: (name:string)=>void
}

const SearchOutcomeItem: React.FC<locationDetailsProps> = ({airport, handleSelect}) => {
  return (
    <Pressable style={styles.container} onPress={()=>handleSelect(airport)}>
        <Text style={styles.item}>{airport.subName}</Text>
        <Text style={styles.item}>{airport.name}</Text>
        <Text style={styles.item}>{airport.address.countryName}</Text>
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