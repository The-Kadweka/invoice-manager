import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import PaymentsScreen from './PaymentsScreen';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AccountScreen from './AccountScreen';
import { StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import React from 'react';

const Tab=createBottomTabNavigator()
const BottomTabScreen = () => {
  return (
   <Tab.Navigator 
   initialRouteName='Home'
   activeTintColor='black'
   inactiveTintColor='#AD40AF'
   screenOptions={{
    headerShown:false,
    tabBarShowLabel:false,
    tabBarStyle:styles.tabBar,
   }}
   >
    <Tab.Screen name='Home' component={HomeScreen}
      options={{
        tabBarLabel:'Home',
        tabBarIcon:({focus:boolean})=>(
<Entypo name="home" size={30} color="#AD40AF" />        )}}
    />
    <Tab.Screen name='Payments' component={PaymentsScreen}
      options={{
        tabBarLabel:'Payments',
        tabBarIcon:({focus:boolean})=>(
<MaterialIcons name="payments" size={30} color="#AD40AF" />        )}}
    />
    <Tab.Screen name='Account' component={AccountScreen}
      options={{
        tabBarLabel:'Profile',
        tabBarIcon:({focus:boolean})=>(
<Ionicons name="person" size={30} color="#AD40AF" />        )}}
    />
   </Tab.Navigator>
  )
}

export default BottomTabScreen

const styles = StyleSheet.create({})