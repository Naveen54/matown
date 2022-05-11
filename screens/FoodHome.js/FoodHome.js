import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native'
import React from 'react'
import SearchBox from '../../Components/SearchBox'
import HotelCard from '../../Components/HotelCard'

const FoodHome = () => {
  return (
    <View style={styles.foodHomeContainer}>
        <View style={styles.SearchBoxContainer}>
      <SearchBox placeholder={"Search for Food or Restaurants"} />
      </View>
      <ScrollView style={{flex:1}}>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
      </ScrollView>
    </View>
  )
}

export default FoodHome

const styles = StyleSheet.create({
foodHomeContainer:{
    flex:1
},
SearchBoxContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10
}
})