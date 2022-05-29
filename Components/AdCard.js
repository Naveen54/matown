import { StyleSheet, Text, View,Image,TouchableNativeFeedback } from 'react-native'
import React from 'react'

const AdCard = () => {
  return (
    <TouchableNativeFeedback>
    <View style={styles.AdCardcover}>
      <Image 
      style={styles.logo}
      resizeMode='cover'
      source={{uri:'https://img.freepik.com/free-vector/grand-opening-soon-promo-background_52683-61197.jpg?w=2000'}}/>
    </View>
    </TouchableNativeFeedback>
  )
}

export default AdCard

const styles = StyleSheet.create({
    AdCardcover:{
        width:"90%",
        height:150,
        borderRadius:20,
        backgroundColor:"white",
        marginLeft:20,
      marginVertical:10
    },
    logo:{
        width:'100%',
        height:'100%',
        borderRadius:20
    }
})