import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from 'react-native-elements/dist/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { flightqueActions, persistantStorageActions } from '../store'
interface SaveProps{
  tickets: {}
}
const SaveAndBook: React.FC<SaveProps> = ({ticket}) => {
  const dispatch = useDispatch();
  const handleSave= ()=>{
    dispatch(persistantStorageActions.save);
  }
  return (
    <View style={styles.container}>
                <Button
              title="Book"
              style = {styles.button}
              buttonStyle={{
                backgroundColor: '#BF40BF',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 20,
                width: '80%',
                alignSelf:'center'
              }}/>
        
            <Button
              title="Save"
              style = {styles.button}
              onPress={handleSave}
              buttonStyle={{
                backgroundColor: '#BF40BF',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 20,
                width: '80%',
                alignSelf:'center'
              }} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
       
    }
})
export default SaveAndBook