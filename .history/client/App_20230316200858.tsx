import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import Constants  from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './src/context/AutentificationContext';
import TabsNavigation from './src/Navigation/TabsNavigation';
import StackNavigator from './src/Navigation/StackNavigator';


export default function App() {
  const [isLoggedin, setLogin] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedin, setLogin}}>
    <NavigationContainer >
      {
        isLoggedin=== false ?  <StackNavigator />: <TabsNavigation /> 
      }
    </NavigationContainer>
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },

})

