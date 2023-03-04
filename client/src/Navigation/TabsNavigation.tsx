import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FlightSearchProvider} from '../UI/FlightSearch';
import { Bookings } from '../UI/Bookings';
import React from 'react'
import Home from '../UI/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';
import Trips from '../UI/Trips';
import SignUp from '../UI/Autentication/SignUp';
const Tab = createBottomTabNavigator();
const TabsNavigation = ({}) => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Trips') {
          iconName = focused ? 'basket': 'basket-outline';
        } else if (route.name === 'FlightSearch'){
          iconName = focused ? 'search-circle-sharp':'search-circle-outline'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" options={{headerShown:false}} component={Home} />
    <Tab.Screen name="FlightSearch" options={{title: 'Search'}} component={FlightSearchProvider} />
    <Tab.Screen name="Trips" component={Trips} />
    <Tab.Screen name="SignUp" component={SignUp} />
    <Tab.Screen name="StackNavigator" options={{headerShown:false}} component={StackNavigator} />
  </Tab.Navigator>
  )
}

export default TabsNavigation