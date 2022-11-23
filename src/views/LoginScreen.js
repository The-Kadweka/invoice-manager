import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useState,useContext } from 'react'
import CustomButtom from '../shared/CustomButtom';
import CustomInputFields from '../shared/CustomInputFields';
import { AuthContext } from '../context/AuthContext';
import CustomSpinner from '../shared/CustomSpinner'
const LoginScreen = ({navigation}) => {
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const {isLoading,login} = useContext(AuthContext);
  const getContent=()=>{
    if(isLoading){
      return <CustomSpinner/>
    }
    return <SafeAreaView style={styles.container}>
    <View style={{paddingHorizontal:25}}>
    <View style={styles.ImageView}>
    <Image source={require('../../assets/images/login.png')} style={styles.Image}/>
    </View>
      <Text style={{
        fontSize:28,
        fontWeight:'500',
        color:'#333',
        marginBottom:30
      }}>Login</Text>
      
      <CustomInputFields
      keyboardType={'email-address'}
      label={'Email Address'}
      
      value={email}
        setValue={setEmail}
      icon={
        <MaterialIcons name="alternate-email" size={20} color="black" style={{marginRight:5}}/>
      }/>
      <CustomInputFields
      label={'Password'}
      inputType={'password'}
      value={password}
        setValue={setPassword}
      icon={
        <Ionicons name="ios-lock-closed-outline" size={20} color="black" style={{marginRight:5}}/>
      }
      fieldButtonLabel={'Forgot'}
      fieldButtonFunction={()=>{}}        
      />
      <CustomButtom 
      label={'Login'}
      onPress={()=>{
        login(email,password)
      }}
    />
      <View style={{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:30
      }}>
      <Text style={{
          fontWeight:'bold',
          fontSize:20,
      }}>New to the app?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
        <Text  style={{
          marginLeft:5,
          fontWeight:'700',
          fontSize:20,
          color:'#AD40AF'
          }}>Register</Text>
      </TouchableOpacity>
      </View>
      </View>

    </SafeAreaView>
  }
  return (
    <View isLoading style={styles.container}>
    {getContent()}
   </View>
  );
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  ImageView:{
    alignItems:'center'
  },
  Image:{
    height:300,
    transform:[{rotate:'-5deg'}],
    width:300
  }
})