import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBox from '../../Components/SearchBox'

const FoodHome = () => {
  return (
    <View style={styles.foodHomeContainer}>
        <View style={styles.SearchBoxContainer}>
      <SearchBox placeholder={"Search for Food or Restaurants"} />
      </View>
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