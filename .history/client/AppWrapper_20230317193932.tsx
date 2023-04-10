import React from 'react'
import TabsNavigation from './src/Navigation/TabsNavigation';
import StackNavigator from './src/Navigation/StackNavigator';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

const AppWrapper = () => {
    const isLoggedin = useSelector((state)=>state.authSlice.isLoggedin);
  return (
    <StackNavigator />
  )
}

export default AppWrapper