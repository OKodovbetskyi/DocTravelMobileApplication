import React,{useState} from 'react'
import ScreenWrapper from '../components/Wrapper/ScreenWrapper'
import CardWrapper from '../components/Wrapper/CardWrapper'
import { ScrollView } from 'react-native'

import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core';
const Trips = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
   
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