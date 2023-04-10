import React from 'react'
import Login from '../UI/Autentication/Login'
import SignUp from '../UI/Autentication/SignUp'
import ForgotPassword from '../UI/Autentication/ForgotPassword'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accomodation from '../UI/Accomodation';
import HealthPackages from '../UI/HealthPackages';
import Home from '../UI/Home';
import FlightSearch from '../UI/FlightSearch';
import AssistantAi from '../UI/AssistantAi';
import Trips from '../UI/Trips';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={
        {
          headerShown: true
        }}>
       <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Accomodation" component={Accomodation} />
        <Stack.Screen name="HealthPackages" component={HealthPackages} />
        <Stack.Screen name="FlightSearch" component={FlightSearch} />
        <Stack.Screen name="AssistantAI" component={AssistantAi}/>
        <Stack.Screen name="SavedFlights" component={Trips}/>
        </Stack.Navigator>
  )
}

export default StackNavigator