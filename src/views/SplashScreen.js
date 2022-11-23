import { StyleSheet, Image,Text, View, Animated, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <View style={styles.contentContainer}>
<Animated.Image style={[styles.image,{opacity:fadeAnim}]}
  source={require('../../assets/images/splash.png')}
/>
<Animated.View style={[styles.logoContainer,{marginLeft:moveAnim}]}>
  <Animated.Text style={[styles.logoText]}>A</Animated.Text>
  <Animated.Text style={[styles.logoText,{opacity:fadeAnim}]}>ccounting</Animated.Text>
</Animated.View>
    </View>
   </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#AD40AF',
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: 'white',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flexDirection: 'row',
  },
})