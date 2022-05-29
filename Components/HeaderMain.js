import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'
import companyLogo from '../assets/Matown.png'

const HeaderMain = () => {
  return (
    <View style={styles.headerCover}>
      <Image source={companyLogo} resizeMode='cover' style={styles.Logo}/>
    </View>
  )
}

export default HeaderMain

const styles = StyleSheet.create({
    headerCover:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:70,
        backgroundColor:'white',
    },
    mainText:{
        fontFamily:FONTS.bold,
        fontSize:20,
        textAlign:'center',
    },
    Logo:{
      width:100,
      height:120,
      marginTop:10
    }
})