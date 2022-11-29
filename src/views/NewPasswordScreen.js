import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import CustomButtom from '../shared/CustomButtom'
import CustomInputFields from '../shared/CustomInputFields'
import { Feather } from '@expo/vector-icons';
import CustomSpinner from '../shared/CustomSpinner'
import { AntDesign } from '@expo/vector-icons';
import React,{useState,useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code,setCode]=useState(null)
  const [password,setPassword]=useState(null)
  const {isLoading,errorMessage,setNewPassword} = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
    {isLoading?(
      <><CustomSpinner/></>
    ):(
     <>
     <View><Text style={{fontSize:20,fontWeight:'700'}}>New Password</Text></View>
      <View style={{width:'80%',alignItems:'center'}}>
        <CustomInputFields value={code} setValue={setCode}
        label={'Code'}
          icon={
        <AntDesign name="qrcode" size={20} color="black" style={{marginRight:5}}/>
      }
        />
        <CustomInputFields value={password} setValue={setPassword}
        label={'Password'}
        inputType={'password'}
          icon={
        <Entypo name="lock-open" size={20} color="black" style={{marginRight:5}}/>
      }
        />
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>{errorMessage.message}</Text>
        </View>
       <View style={{justifyContent:'space-between',flexDirection:'row'}}>
     <TouchableOpacity onPress={()=>{
        navigation.navigate('ForgotPassword')
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
        setNewPassword(code,password)
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
      >Save New Password</Text>
    </TouchableOpacity>
     </View>
      </View>
     </>
    )}
    </View>
  )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})