import {Text,TouchableOpacity} from 'react-native'
import React from 'react'

export default function CustomButtom({label,onPress}) {
  return (
    <TouchableOpacity onPress={onPress}
    style={{
        backgroundColor:'#AD40AF',
        padding:20,borderRadius:10,
        marginBottom:30}}
    >
      <Text 
      style={{
        textAlign:'center',
        fontWeight:'700',
        fontSize:20,
        color:'#fff'
        }}
      >{label}</Text>
    </TouchableOpacity>
  )
}