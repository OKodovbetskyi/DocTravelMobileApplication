import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-elements/dist/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { flightqueActions, persistantStorageActions } from '../store'
interface SaveProps{
  tickets: any
}
const SaveAndBook: React.FC<SaveProps> = ({ticket}) => {
  const dispatch = useDispatch();
  const savedTickets = useSelector(state=> state.savedTickets); 
  const handleSave= ()=>{
    dispatch(persistantStorageActions.save(ticket));
  }
  const handleRemove=(id : number)=>{
    dispatch(persistantStorageActions.remove(id))
    dispatch(persistantStorageActions.save(null));
  }

  return (
    <View style={styles.container}>
            <Button
              title="Book"
              buttonStyle={styles.btnBook}/>
        
            <Button
              title="Save"
              style = {styles.button}
              onPress={handleSave}
              buttonStyle={styles.btnSave} />
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