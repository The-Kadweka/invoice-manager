import { StyleSheet,Text, View } from 'react-native'
import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';

const SuccessMessage = () => {
    const {isLoading,resetPassword} = useContext(AuthContext);
  return (
    <View>
      <Text>SuccessMessage</Text>
    </View>
  )
}

export default SuccessMessage

const styles = StyleSheet.create({})