import {ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomSpinner = () => {
  return (
    <View style={styles.container}>
    <ActivityIndicator size="large" color="#AD40AF" />
  </View>
  )
}

export default CustomSpinner

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})