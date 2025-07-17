import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import CameraScreen from '../screens/CameraScreen'
import LocastionScreen from '../screens/LocastionScreen'

const Stack=createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Camera' component={CameraScreen}/>
        <Stack.Screen name='Location' component={LocastionScreen}/>
        

    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})