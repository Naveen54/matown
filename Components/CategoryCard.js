import { StyleSheet, Text, View ,Image , TouchableNativeFeedback} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {FONTS} from '../constants/index';

const CategoryCard = (props) => {
  const {categoryName,navigateTo,image} = props
const navigation = useNavigation();

  return (
    <TouchableNativeFeedback onPress={()=>navigation.navigate(navigateTo)}>
    <View style={styles.Card}>
      <Image
      style={styles.image}
      resizeMode='cover'
      source={image?image:{uri:'https://img.favpng.com/18/21/19/grocery-store-shopping-bags-trolleys-supermarket-clip-art-png-favpng-wcErxTbRcn5a4t6A9NUG3acqj.jpg'}} />
      <View ><Text style={styles.cardtext}>{categoryName}</Text></View>
    </View>
    </TouchableNativeFeedback>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    Card:{
            width:130,
            height:130,
            borderRadius:20,
            // justifyContent:"center",
            alignItems:'center',
            margin:20
    },
    image:{
        width:'100%',
        height:'100%'
    },
    cardtext:{
      paddingTop:8,
        fontFamily:FONTS.bold,
        fontSize:16
    }
})