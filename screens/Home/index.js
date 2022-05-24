import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import HeaderCard from '../../Components/HeaderCard'
import CategoryCard from '../../Components/CategoryCard'


// Images
import BurgerImage from '../../assets/burger.png'
import GroceryImage from '../../assets/grocery.png'
import PharmImagea from '../../assets/pharmaceutical.png'
import MeatImage from '../../assets/meat.png'
import ElectronicsImage from '../../assets/electronics.png'

const Home = () => {
  return (
    <ScrollView style={styles.home}>
      <HeaderCard/>
      <View style={styles.cardList}>
<CategoryCard categoryName="Food" navigateTo={"FoodHome"} image={BurgerImage}/>
<CategoryCard categoryName="Grocery" image={GroceryImage}/>
<CategoryCard categoryName="Meat" image={MeatImage}/>
<CategoryCard categoryName="Pharmacheuticals" image={PharmImagea}/>
<CategoryCard categoryName="Electronics" image={ElectronicsImage}/>
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
    alignItems:"center",
    justifyContent:"center",
      flexDirection:'row',
      flexWrap:'wrap'
  }
})