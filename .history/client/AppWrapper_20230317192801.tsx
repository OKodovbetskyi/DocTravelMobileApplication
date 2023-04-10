import React from 'react'
import { NavigationContainer } from 'react-navigation'
const AppWrapper = () => {
  return (
    <NavigationContainer >
    {
      isLoggedin=== false ?  <StackNavigator />: <TabsNavigation /> 
    }
  </NavigationContainer>
  )
}

export default AppWrapper