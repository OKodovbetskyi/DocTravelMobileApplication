import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Constants  from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './src/context/AutentificationContext';
import TabsNavigation from './src/Navigation/TabsNavigation';
import StackNavigator from './src/Navigation/StackNavigator';
import store from './src/store';
import AppWrapper from './AppWrapper';

export default function App() {
  const [isLoggedin, setLogin] = useState(true);
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },

})

