import { StyleSheet, Text, View , ScrollView, TextInput,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import CategoryCard from '../../Components/CategoryCard'
import AdCard from '../../Components/AdCard'
import { FONTS,SIZES } from '../../constants'


// Images
import BurgerImage from '../../assets/burger.png'
import GroceryImage from '../../assets/grocery.png'
import PharmImagea from '../../assets/pharmaceutical.png'
import MeatImage from '../../assets/meat.png'
import ElectronicsImage from '../../assets/electronics.png'
import HeaderMain from '../../Components/HeaderMain'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
   backgroundColor="transparent"
   translucent={true}
/>
    <ScrollView style={styles.home} stickyHeaderIndices={[2]}>
      <HeaderMain/>
      <Text style={styles.headerText}>What do you wanna buy for today?</Text>
      <View style={styles.sbContainer}>
      <View style={styles.searchbox}>
            <TextInput placeholder="Search Items or Shops"/>
      </View>
      </View>
      <AdCard/>
      <View style={styles.cardList}>
<CategoryCard categoryName="Food" navigateTo={"FoodHome"} image={BurgerImage}/>
<CategoryCard categoryName="Grocery" image={GroceryImage}/>
<CategoryCard categoryName="Meat" image={MeatImage}/>
<CategoryCard categoryName="Pharmacheuticals" image={PharmImagea}/>
<CategoryCard categoryName="Electronics" image={ElectronicsImage}/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  home:{
    backgroundColor:'white'
  },
  cardList:{
    marginTop:30,
    marginBottom:40,
    alignItems:"center",
    justifyContent:"center",
      flexDirection:'row',
      flexWrap:'wrap'
  },
    headerText:{
        fontFamily:FONTS.bold,
        fontSize:25,
        marginLeft:20,
        marginTop:10
    },
    searchbox: {
      backgroundColor: 'white',
      width:'90%',
      borderRadius:10,
      height:50,
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.small - 2,
      marginLeft:20,
      marginVertical:10,
      elevation:10

  },
  container:{
    flexGrow:1,
    backgroundColor:'white'
  },
  sbContainer:{
    backgroundColor:'white'
  }
})