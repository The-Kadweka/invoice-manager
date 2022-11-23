import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CustomInputFields({
    label,
    icon,
    setValue,
    value,
    inputType,
    keyboardType,
    fieldButtonLabel,
    fieldButtonFunction
}) {
  return (
    <View style={{
        flexDirection:'row',
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingBottom:1,
        marginBottom:20
        }}>
      {icon}
      {inputType =='password' ?(
        <TextInput placeholder='Password'
        value={value} 
        onChangeText={setValue}
         style={{flex:1,paddingVertical:0,fontSize:15,fontWeight:'bold'}} secureTextEntry={true}/>

      ): (
        <TextInput 
        placeholder={label}
        keyboardType={keyboardType}
        value={value} 
        onChangeText={setValue}
        style={{flex:1,paddingVertical:0,fontSize:15,fontWeight:'bold'}}             
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color:'#AD40AF',fontWeight:'700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
      </View>
  )
}