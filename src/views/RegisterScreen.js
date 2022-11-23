import { Image, SafeAreaView, StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react'
import CustomInputFields from '../shared/CustomInputFields';
import CustomButtom from '../shared/CustomButtom';
import { AuthContext } from '../context/AuthContext';
import { AntDesign } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {
  const [email,setEmail]=useState();
  const [name,setName]=useState();
  const [phone,setPhone]=useState();
  const [password,setPassword]=useState();
  const [vat,setVat]=useState();
  const {isLoading,register} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingHorizontal:25}}>
    <View style={styles.ImageView}>
    <Image source={require('../../assets/images/register.png')} style={styles.Image}/>
    </View>
      <Text style={{
        fontSize:28,
        fontWeight:'500',
        color:'#333',
        marginBottom:30
      }}>Register</Text>
    
      <CustomInputFields 
        label={'Email Address'}
        value={email}
        setValue={setEmail}
        icon={
        <MaterialIcons name="alternate-email" size={20} color="black" style={{marginRight:5}}/>
      }/>
      
      <CustomInputFields
      label={'Full Name'}
      value={name}
        setValue={setName}
      icon={
        <Ionicons name="person-outline" size={20} color="black" style={{marginRight:5}}/>

      }/>
      <CustomInputFields
     value={phone}
        setValue={setPhone}
      label={'phone'}
      icon={
<AntDesign name="phone" size={20} color="black" style={{marginRight:5}}/>
      }/>
            <CustomInputFields
      value={vat}
        setValue={setVat}
      label={'Vat'}
      icon={
        <MaterialCommunityIcons name="account-reactivate" size={20} color="black" style={{marginRight:5}}/>
      }/>
       <CustomInputFields
      label={'Password'}
      inputType={'password'}
      value={password}
        setValue={setPassword}
      icon={
        <Ionicons name="ios-lock-closed-outline" size={20} color="black" style={{marginRight:5}}/>

      }/>
    <CustomButtom 
      label={'Register'}
      onPress={()=>{
        register(name,email,vat,phone,password)
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
      }}>Already Registered?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
        <Text  style={{
          marginLeft:5,
          fontWeight:'700',
          fontSize:20,
          color:'#AD40AF'
          }}>Login</Text>
      </TouchableOpacity>
      </View>
      </View>

    </SafeAreaView>
  )
}

export default RegisterScreen

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