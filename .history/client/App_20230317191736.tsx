import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider, useSelector} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Constants  from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './src/context/AutentificationContext';
import TabsNavigation from './src/Navigation/TabsNavigation';
import StackNavigator from './src/Navigation/StackNavigator';
import store from './src/store';

function AppConf() {
  const isLoggedin = useSelector(state=>state.authSlice.isLoggedIn)
  return (
    <NavigationContainer >
      {
        isLoggedin=== false ?  <StackNavigator />: <TabsNavigation /> 
      }
    </NavigationContainer>
 
  )
}
const App = () =>{
  return (
    <Provider store={store}>
    <AppConf />
    </Provider>
  )
}
export default App;
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },

})

