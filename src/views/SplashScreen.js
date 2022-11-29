import { StyleSheet, View, Animated, Dimensions, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'

const SplashScreen = () => {
  const [authLoaded,setAuthLoaded]= useState(false)
  const moveAnim=useRef(new Animated.Value(0)).current;
  const fadeAnim=useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect((props)=>{
    Animated.sequence([
      Animated.timing(moveAnim,{
        duration:2000,
        toValue:Dimensions.get('window').width/1.6,
        delay:0,
        useNativeDriver:false
      }),
      Animated.timing(moveAnim,{
        duration:2000,
        toValue:0,
        delay:0,
        useNativeDriver:false
      })
    ]).start();
    Animated.timing(fadeAnim,{
      duration:2000,
      toValue:1,
      delay:2000,
      useNativeDriver:false
    }).start();
    setTimeout(() =>{
      setAuthLoaded(true);
    },5000);
  },[moveAnim,fadeAnim])
  useEffect(() =>{
    if(authLoaded){
      navigation.navigate('Login')
    }
  })
  return (
   <SafeAreaView style={styles.container}>
    {/* <View style={styles.contentContainer}> */}
<Animated.Image style={[styles.image,{opacity:fadeAnim}]}
  source={require('../../assets/images/splash.png')}
/>
<Animated.View style={[styles.logoContainer,{marginLeft:moveAnim}]}>
  <Animated.Text style={[styles.logoText]}>I</Animated.Text>
  <Animated.Text style={[styles.logoText,{opacity:fadeAnim}]}>nvoice</Animated.Text>

  <Animated.Text style={[styles.logoText,{marginLeft:10}]} >M</Animated.Text>
  <Animated.Text style={[styles.logoText,{opacity:fadeAnim}]}>anager</Animated.Text>
</Animated.View>
    {/* </View> */}
   </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#AD40AF',
    alignItems:'center'
  },
  logoText: {
    fontSize: 45,
    marginTop: 20,
    color: 'white',
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flexDirection: 'row',
  },
})