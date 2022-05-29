import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts
} from '@expo-google-fonts/comfortaa';
import AppLoading from 'expo-app-loading';

//Screens
import Home from './screens/Home';
import FoodHome from './screens/FoodHome';
import HotelStackNavigation from './Navigation/HotelStackNavigation';

const Tab = createBottomTabNavigator();



export default function App() {
  let [fontsLoaded] = useFonts({
    LatoBold:require('./assets/fonts/Lato-Bold.ttf'),
    LatoRegular:require('./assets/fonts/Lato-Regular.ttf')

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:"#ff0000",
        headerShown:false
      }}>
      <Tab.Screen 
      options={{
        tabBarIcon:({color,size})=> <Ionicons name="home" size={size} color={color} />

      }}
      name="Home" 
      component={Home} />
      <Tab.Screen 
      options={{
        tabBarIcon:({color,size})=> <Ionicons name="fast-food-outline" size={size} color={color} />,
        headerShown: false
      }}
      name="FoodHome" component={HotelStackNavigation}/>
    </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
