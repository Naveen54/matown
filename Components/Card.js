import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.Card}>
      <Image
      style={styles.image}
      resizeMode='cover'
      source={{uri:'https://img.favpng.com/18/21/19/grocery-store-shopping-bags-trolleys-supermarket-clip-art-png-favpng-wcErxTbRcn5a4t6A9NUG3acqj.jpg'}} />
      <View style={styles.cardtext}><Text>Grocery</Text></View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    Card:{
            width:150,
            height:150,
            borderRadius:20,
            backgroundColor:'red',
            // justifyContent:"center",
            alignItems:'center',
            margin:20
    },
    image:{
        width:'100%',
        height:'100%'
    },
    cardtext:{
        // textAlign:'center'
    }
})