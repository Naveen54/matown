import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import FoodImage from '../assets/restuarant.jpg'
import { FONTS, SIZES, COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native'

const HotelCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.HotelCard} onPress={()=>navigation.navigate("Hotel")} >
      <View style={styles.hotelImageContainer} >

        <Image style={styles.hotelImage} resizeMode='cover' source={FoodImage} />
        <View style={styles.hotelNameContainer}>
          <Text style={styles.hotelName}>
            Saravana Bhavan
          </Text>
        </View>
      </View>
      <View style={styles.hotelDescription}>
        <View style={styles.RatingAndTimingContainer}>
          <View>
            <Text style={styles.rating}>
              4.5 Rating
            </Text>
          </View>
          <View>
            <Text style={styles.Delivery}>
              30 mins
            </Text>
          </View>
        </View>
        <View >
            <Text style={styles.typeOfFood}>
              South Indian, North Indian, Chineese
            </Text>
          </View>
          <View>
            <Text style={styles.location}>
              Thiruverkadu
            </Text>
          </View>
      </View>

    </TouchableOpacity>
  )
}

export default HotelCard

const styles = StyleSheet.create({
  HotelCard: {
    height: 280,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'black',
    marginHorizontal: 6,
    marginVertical: 10,
    flex: 1,
  },
  hotelImageContainer: {
    // elevation: 10
  },
  hotelName: {
    color: 'white',
    fontSize: 18,
    fontFamily:FONTS.bold
  },
  hotelImage: {
    height: 200,
    width: '100%',

  },
  hotelDescription:{
      paddingHorizontal:10,
      fontFamily:FONTS.regular
  },
  RatingAndTimingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:4
  },
  hotelNameContainer:{
  position:'absolute',
  top:176,
  left:8
  },
  rating:{
    paddingRight:4,
    fontFamily:FONTS.bold
  },
  Delivery:{
paddingLeft:4,
fontFamily:FONTS.bold
  },
  typeOfFood:{
    fontFamily:FONTS.regular,
    paddingBottom:4,
    fontSize:16
  },
  location:{
    fontFamily:FONTS.regular,
    fontSize:16
  }

})