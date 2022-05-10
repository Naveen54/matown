import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Screens
import Home from './screens/Home';
import FoodHome from './screens/FoodHome.js/FoodHome';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:"#ff0000"
      }}>
      <Tab.Screen 
      options={{
        tabBarIcon:({color,size})=> <Ionicons name="home" size={size} color={color} />

      }}
      name="Home" 
      component={Home} />
      <Tab.Screen 
      options={{
        tabBarIcon:({color,size})=> <Ionicons name="fast-food-outline" size={size} color={color} />

      }}
      name="Food" component={FoodHome}/>
    </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
