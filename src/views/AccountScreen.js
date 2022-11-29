import {StyleSheet, Text,TouchableOpacity, View ,Dimensions} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';
import React,{useContext} from 'react'

const HEIGHT =Dimensions.get('window').height
const AccountScreen = () => {
    const navigation = useNavigation();
    const {logout,isLoading,userInfo} = useContext(AuthContext);
  return (
   <View style={styles.Container} translucent={true}>
    <View style={styles.topContainer}>
        <View style={styles.topText}>
            <TouchableOpacity style={{
                height:40,
                width:40,
                backgroundColor:'#AD40AF',
                justifyContent:'center',
                alignItems:'center',
                elevation:10,
                borderRadius:10
        }} onPress={()=>{navigation.navigate('Home')}}>
        <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{
                height:40,
                width:40,
                backgroundColor:'white',
                justifyContent:'center',
                alignItems:'center',
                elevation:10,
                borderRadius:10
        }}>
            <EvilIcons name="pencil" size={24} color="#AD40AF" />
            </TouchableOpacity>
        </View>
        <View style={styles.imageView}>
            <View style={styles.imageIcon}>
            <View style={styles.imageIcon1}></View>
            </View>
            <Text style={{fontWeight:'bold',fontSize:25,left:20,marginTop:40}}>{userInfo.user_name}</Text>
        </View>
        <View style={styles.blcView}>
        <View style={{marginLeft:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Due Balance</Text>
                <View style={{
                    flexDirection:'row',
                    marginTop:10,
                    justifyContent:'flex-start'
                }}>
                <Text style={{fontWeight:'bold',marginTop:10}}>Ksh</Text>
                <Text style={{fontWeight:'bold',fontSize:20}}>46,500</Text>
                </View>
        </View>
        </View>
    </View>
   <View style={styles.bottomView}>
    <View style={{marginTop:20,marginLeft:20}}>
        <Text>Email</Text>
        <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>{userInfo.email}</Text>
    </View>
    <View style={{marginTop:20,marginLeft:20}}>
    <Text>Phone number</Text>
    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>{userInfo.phone}</Text>
    </View>
    <View style={{marginTop:20,marginLeft:20}}>
        <View style={{
            flexDirection:'row',
            justifyContent:'flex-start'
        }}>
            <View style={{
           height:50,
           width:50,
           borderRadius:10,
           elevation:10,
           backgroundColor:'white',
           justifyContent:'center',
           alignItems:'center'
        }}>
            <AntDesign name="sharealt" size={24} color="#AD40AF" />
            </View>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,left:20}}>Invite a friend</Text>
        </View>
        <TouchableOpacity  
        onPress={()=>{
            logout()
        }}
        style={{
            flexDirection:'row',
            justifyContent:'flex-start',
            marginTop:20
        }}>
        <View style={{
           height:50,
           width:50,
           borderRadius:10,
           elevation:10,
           backgroundColor:'white',
           justifyContent:'center',
           alignItems:'center'
        }}>
        <MaterialIcons name="logout" size={24} color="#AD40AF" />
        </View>
            <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,left:20}}>Log out</Text>
        </TouchableOpacity>
    </View>
   </View>
   </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
        Container:{
            backgroundColor:'white',
            height:'100%'
        },
        topContainer:{
            backgroundColor:'white',
            top:15,
            marginLeft:20,
            marginRight:20,
            height:'40%'
        },
        topText:{
            flexDirection:'row',
            marginTop:10,
            justifyContent:'space-between'
        },
        imageView:{
            marginTop:25,
            flexDirection:'row',
            justifyContent:'flex-start'
        },
        imageIcon:{
            height:100,
            width:100,
            borderRadius:100,
            backgroundColor:'white',
            elevation:10,
            justifyContent:'center',
            alignItems:'center',
        },
        imageIcon1:{
            height:95,
            width:95,
            borderRadius:100,
            backgroundColor:'#F4F4F4',
            elevation:10
        },
        blcView:{
            marginTop:20,
            width:'100%',
            height:100,
            borderRadius:15,
            backgroundColor:'#AD40AF',
            justifyContent:'center'
        },
        bottomView:{
            marginTop:50,
            height:'60%',
            borderTopLeftRadius:30,
            backgroundColor:'#F4F4F4',
            borderTopRightRadius:30,
        }
})