import React,{useState,useEffect} from 'react'
import { View, Text, FlatList } from 'react-native';
import { counterActions } from '../store/index';
import {useDispatch, useSelector} from 'react-redux'
import { StyleSheet } from 'react-native';
import Flights from '../components/Flights';
const Trips = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(state=>state.persistantStorageSlice)
  

  return (
    <View style={styles.container}>
      <Text>Saved flight tickets</Text>
      <FlatList
        data={tickets}
        renderItem={({item}) => 
        <Flights ticket={item}  key={item.id}/>}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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