import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';

import Constants  from 'expo-constants';

import store from './src/store';
import AppWrapper from './AppWrapper';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <AppWrapper />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },

})

