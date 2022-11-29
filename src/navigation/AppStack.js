import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'
import SplashScreen from '../views/SplashScreen';
import { AuthContext } from '../context/AuthContext';
import AccountScreen from '../views/AccountScreen';
import ForgotPasswordScreen from '../views/ForgotPasswordScreen';
import BottomTabScreen from '../views/BottomTabScreen';
import NewPasswordScreen from '../views/NewPasswordScreen';
const Stack = createNativeStackNavigator();

import React,{useContext} from 'react'

const AppStack = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{
       headerStyle: {backgroundColor: '#AD40AF'},
      headerShown:false}}>
     {userInfo.access_token ?(
      <>
      <Stack.Screen name='Bottom' component={BottomTabScreen}/>
      <Stack.Screen name='Profile' component={AccountScreen}/>
      </>
     ):(
      <>
      <Stack.Screen name='Splash' component={SplashScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
      <Stack.Screen name='Register' component={RegisterScreen}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
      </>
     )}
    </Stack.Navigator>
  )
}

export default AppStack

const styles = StyleSheet.create({})