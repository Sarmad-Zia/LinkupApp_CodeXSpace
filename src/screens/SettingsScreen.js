import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Navigation } from 'lucide-react-native'

export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SettingsScreen</Text>

      <Pressable style={{marginTop: 20, padding: 10, backgroundColor: 'red', borderRadius: 5}}
        onPress={() => {
          // Handle logout logic here
          navigation.navigate('SignIn'); // Navigate to the SignIn screen after logout
        }}
      >
        <Text>Logout</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})