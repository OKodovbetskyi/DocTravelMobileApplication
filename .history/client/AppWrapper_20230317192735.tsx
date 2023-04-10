import React from 'react'

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