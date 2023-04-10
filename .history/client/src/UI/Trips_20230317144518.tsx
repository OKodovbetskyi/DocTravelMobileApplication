import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native';


import { Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
import { geocodecoords, getmycoords } from '../utils/mylocation-service';
const Trips = () => {
  const [visible, setVisible] = useState(false);

   
  return (
    <View style={styles.container}>
      <Text>Counter, 1</Text>
        <Button 
        title= "+1"
        onPress={()=>{}}
        />
          <Button 
        title= "-1"
        onPress={()=>{}}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialogContainer: {
 
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    borderRadius: 4,
    height: '100%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});




export default Trips