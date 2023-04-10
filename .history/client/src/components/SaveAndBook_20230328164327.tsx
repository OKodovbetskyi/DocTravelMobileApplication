import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-elements/dist/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { flightqueActions, persistantStorageActions } from '../store'
interface SaveProps{
  tickets: any,
  saved: boolean,
}
const SaveAndBook: React.FC<SaveProps> = ({ticket,saved=false}) => {
  const dispatch = useDispatch();
  const savedTickets = useSelector(state=> state.savedTickets); 
  const handleSave= ()=>{
    dispatch(persistantStorageActions.save(ticket));
  }
  const handleRemove=()=>{
    dispatch(persistantStorageActions.remove(ticket.itineraries[0].segments[0].id))
  }
  console.log("savedTickets",savedTickets)
  return (
    <View style={styles.container}>
            <Button
              title="Book"
              buttonStyle={styles.btnBook}/>
            {saved ?
             <Button
             title="Remove"
             onPress={handleRemove}
             buttonStyle={styles.btnRemove} />
            :
            <Button
            title="Save"
            onPress={handleSave}
            buttonStyle={styles.btnSave} />
          }
           
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
       
    },
    btnBook:{
        backgroundColor: '#BF40BF',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 20,
        width: '80%',
        alignSelf:'center'
    },
    btnSave:{
        backgroundColor: '#BF40BF',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 20,
        width: '80%',
        alignSelf:'center'
    },
    btnRemove:{
      backgroundColor: 'red',
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 20,
      width: '80%',
      alignSelf:'center'
    }
})
export default SaveAndBook