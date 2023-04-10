import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native';
import { counterActions } from '../store/index';
import {useDispatch, useSelector} from 'react-redux'
import { Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
import { geocodecoords, getmycoords } from '../utils/mylocation-service';
const Trips = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const counter = useSelector((state)=> state.counter);

  const incrementHandler = () =>{
    dispatch(counterActions.increase);
  }
  const decrementHandler = () =>{
    dispatch(counterActions.decrement);
  }
  return (
    <View style={styles.container}>
      <Text>Counter, {counter}</Text>
        <Button 
        title= "+1"
        onPress={()=>incrementHandler}
        />
          <Button 
        title= "-1"
        onPress={decrementHandler}
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