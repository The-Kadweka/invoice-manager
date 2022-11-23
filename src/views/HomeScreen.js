import { SafeAreaView,FlatList,Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
    const navigation = useNavigation();
    const {getData,data,userInfo} = useContext(AuthContext);
    useEffect(() =>{
        if(userInfo.access_token){
         getData(userInfo.email)
        }
      })
  return (
   <SafeAreaView style={styles.mainContainer}>
    <View>
        <View style={styles.topContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate('Profile')}>
            <Image source={require('../../assets/images/icon.png')}style={{height:40,width:40}}/>
        </TouchableOpacity>
        <View style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginTop:20
        }}>
        <Text style={{
            fontSize:40,
            fontWeight:'700'
        }}>KES:</Text>
        <Text 
        style={{
            fontSize:40,
            fontWeight:'700'
        }}
        >{data.not_paid}</Text>
        </View>
        </View>
        <View style={styles.bottomContainer}>
        <FlatList showsVerticalScrollIndicator={true}
            data={data.response}
            renderItem={({item})=>(
                <View style={{alignItems:'center',justifyContent:'center'}}>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'90%',borderWidth:1,borderColor:'#AD40AF',height:60,marginTop:20,borderRadius:10}}>
            <View style={{marginLeft:10,height:50,width:50,backgroundColor:'#FFFFFF',borderRadius:100,alignItems:'center',justifyContent:'center'}}>
            <FontAwesome5 name="file-invoice-dollar" size={24} color="#AD40AF" />
                </View>
                <View>
                    <Text style={{fontSize:20,fontWeight:'bold',marginRight:20,marginTop:-20}}>{item.ref}</Text>
                    <Text style={{fontSize:15,fontWeight:'300'}}>{item.due_date}</Text>
                </View>
                <View style={{marginRight:10,marginTop:-20}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}><Text style={{fontSize:15,fontWeight:'bold'}}>KES.</Text>{item.due_amount}</Text>
                    <Text>-{item.paid_amount}</Text>
                </View>
            </View>
                </View>
            )}
        />
        </View>
    </View>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{},
    topContainer:{
        backgroundColor:'#AD40AF',
        height:'30%'
    },
    bottomContainer:{
        height:'70%',
        // backgroundColor:'black'
    },
    iconContainer:{
        height:60,
        width:60,
        backgroundColor:'#FFFFFF',
        marginLeft:20,
        marginTop:30,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    }
})