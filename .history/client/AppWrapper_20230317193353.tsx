import React from 'react'
import { NavigationContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './src/context/AutentificationContext';
import TabsNavigation from './src/Navigation/TabsNavigation';
import StackNavigator from './src/Navigation/StackNavigator';
import { useSelector } from 'react-redux';

const AppWrapper = () => {
    const isLoggedin = useSelector((state)=>state.authSlice.isLoggedin);
  return (
    <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
  )
}

export default AppWrapper