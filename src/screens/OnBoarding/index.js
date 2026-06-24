import { Text, TouchableOpacity, View, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native';

import React from 'react'
import { styles } from './style'

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center',height: '70%', justifyContent: 'center' }}>
        <Image source={require('../../assets/images/logo.png')} style={{ width: 200, height: 200 }} />
        <Text style={styles.headText}>Free LinkUp</Text>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={styles.textN} >Build your network, discover</Text>
          <Text style={styles.textN}> opportunities, and grow your career.</Text>
        </View>
      </View>

      {/* TouchableOpacity  Buttons */}
      <View style={{ alignItems: 'center', width: '100%' }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}  >
          <Text style={{ color: '#3b82f6', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Sign In</Text>
        </TouchableOpacity >

        <TouchableOpacity style={[styles.button, { backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white', marginTop: 15 }]} onPress={() => navigation.navigate('SignUp')}  >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Create Account</Text>
        </TouchableOpacity >

      </View>

      <Text style={styles.footerText}>
        Join professionals worldwide on Free LinkUp
      </Text>

    </View>
  )
}

export default SignUp



