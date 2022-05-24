import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

//Screens
import FoodHome from  '../screens/FoodHome/index.js'
import HotelHome from '../screens/HotelHome/index.js';

const Stack = createStackNavigator();


const HotelStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Food" component={FoodHome} />
      <Stack.Screen name="Hotel" component={HotelHome} />
    </Stack.Navigator>
  )
}

export default HotelStackNavigation

const styles = StyleSheet.create({})


