import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import { AuthProvider } from './src/context/AuthContext';
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
          <AppStack/>
      </AuthProvider>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});
