import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigators/RootNavigator'

const App = () => {
  return (
   <NavigationContainer>
    <RootNavigator/>
   </NavigationContainer>
  )
}

export default App