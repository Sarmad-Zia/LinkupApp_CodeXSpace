import { KeyboardAvoidingView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnBoarding from './src/screens/OnBoarding'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignUp from './src/screens/SignUp'
import SignIn from './src/screens/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={'padding'}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#3b82f6'} />
      {/* <OnBoarding /> */}
      {/* <SignUp/> */}
      {/* <SignIn /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='OnBoarding' component={OnBoarding} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})

