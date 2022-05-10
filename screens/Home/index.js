import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import HeaderCard from '../../Components/HeaderCard'
import Card from '../../Components/Card'

const Home = () => {
  return (
    <ScrollView style={styles.home}>
      <HeaderCard/>
      <View style={styles.cardList}>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  home:{
    flex:1
  },
  cardList:{
    marginTop:40,
    marginBottom:40,
    
      flexDirection:'row',
      flexWrap:'wrap'
  }
})