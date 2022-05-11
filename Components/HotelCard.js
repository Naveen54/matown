import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FoodImage from '../assets/restuarant.jpg'
import { FONTS, SIZES, COLORS } from '../constants'

const HotelCard = () => {
  return (
    <View style={styles.HotelCard}>
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
        <View style={styles.typeOfFood}>
            <Text>
              South Indian,North Indian,Chineese
            </Text>
          </View>
          <View>
            <Text>
              Thiruverkadu
            </Text>
          </View>
      </View>

    </View>
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
    fontWeight:'bold'
  },
  hotelImage: {
    height: 200,
    width: '100%',

  },
  hotelDescription:{
      paddingHorizontal:10,
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
    fontWeight:'bold'
  },
  Delivery:{
paddingLeft:4,
fontWeight:'bold'
  },
  typeOfFood:{
        paddingBottom:4
  }

})