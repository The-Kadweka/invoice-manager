import { Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import CustomButtom from '../shared/CustomButtom';
import CustomInputFields from '../shared/CustomInputFields';
import CustomSpinner from '../shared/CustomSpinner'
import { MaterialIcons } from '@expo/vector-icons';
import React,{useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {
    const [email,setEmail]=useState(null)
    const {isLoading,errorMessage,resetPassword} = useContext(AuthContext);
    const navigation = useNavigation();

  return (
   <View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   }} >
    {isLoading?(
      <><CustomSpinner/></>
    ):(<View style={{width:'80%',alignItems:'center'}}>
   <View translucent={true}>
    <Image source={require('../../assets/images/Forgot_password.png')} style={{height:150,width:150,marginBottom:20}}/>
   </View>
  <CustomInputFields
      keyboardType={'email-address'}
      label={'Email Address'}
      
      value={email}
      setValue={setEmail}
      icon={
        <MaterialIcons name="alternate-email" size={20} color="black" style={{marginRight:5}}/>
      }/>
      <Text style={{marginBottom:20,marginTop:-4,color:'red'}}>{errorMessage.message}</Text>
     <View style={{justifyContent:'space-between',flexDirection:'row'}}>
     <TouchableOpacity onPress={()=>{
          navigation.navigate('Login')
       }}
    style={{
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#AD40AF',
        marginBottom:30,
        marginRight:20,
        }}
    >
      <Text 
      style={{
        textAlign:'center',
        fontWeight:'700',
        fontSize:20,
        color:'#AD40AF'
        }}
      >Cancel Request</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      resetPassword(email)
       }}
    style={{
        backgroundColor:'#AD40AF',
        padding:20,
        borderRadius:10,
        marginBottom:30
        }}
    >
      <Text 
      style={{
        textAlign:'center',
        fontWeight:'700',
        fontSize:20,
        color:'#fff'
        }}
      >Reset Password</Text>
    </TouchableOpacity>
     </View>
  </View>
    )}
   </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})