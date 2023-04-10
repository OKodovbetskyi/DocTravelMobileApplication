import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import Constants  from 'expo-constants';

import store from './src/store';
import StackNavigator from './src/Navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
    <StackNavigator />
    </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },

})

