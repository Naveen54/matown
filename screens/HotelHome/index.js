import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemCard from '../../Components/ItemCard'
import { ScrollView } from 'react-native-gesture-handler'

const HotelHome = () => {
  return (
    <View style={{flex:1}}>
     <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
       <ItemCard/>
       <ItemCard/>
       <ItemCard/>
       <ItemCard/>
     </ScrollView>
    </View>
  )
}

export default HotelHome

const styles = StyleSheet.create({})