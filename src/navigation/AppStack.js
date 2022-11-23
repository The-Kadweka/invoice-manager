import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import SplashScreen from '../views/SplashScreen';
import { AuthContext } from '../context/AuthContext';
import AccountScreen from '../views/AccountScreen';
import HomeScreen from '../views/HomeScreen';
const Stack = createNativeStackNavigator();

import React,{useContext} from 'react'

const AppStack = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
     {userInfo.access_token ?(
      <>
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name='Profile' component={AccountScreen}/>
      </>
     ):(
      <>
      <Stack.Screen name='Splash' component={SplashScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Register' component={RegisterScreen}/>
      </>
     )}
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})