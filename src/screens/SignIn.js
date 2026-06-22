import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { InputField } from '../componets/InputFeilds'
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {

    const navigation = useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <LinearGradient
            colors={['#3b82f6', '#ffffff']}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.2, y: 1 }}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={require('../../Assets/Images/logo.png')} style={{ width: 100, height: 100 }} />
                <Text style={styles.headText}>Free LinkUp</Text>
                <Text style={styles.textN}>Connect. Grow. Succeed</Text>

                <View style={styles.card}>
                    <View style={{ marginBottom: 25 }}>
                        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', }}>
                            Welcome Back!
                        </Text>
                        <Text style={{ color: 'gray', fontSize: 14, marginTop: 5 }}>
                            Sign in to continue your journey.
                        </Text>
                    </View>
                    {/* Email Field */}
                    <View style={{ width: '100%', marginBottom: 2 }}>
                        <InputField
                            name="email"
                            label="Email"
                            placeholder="you@example.com"
                            icon="Mail"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password Field */}
                    <View style={{ width: '100%', marginBottom: 5 }}>
                        <InputField
                            name="password"
                            label="Password"
                            placeholder="••••••••"
                            icon="Lock"
                            value={password}
                            inputType={true}
                            onChangeText={setPassword}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Forgot Password */}
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 20 }}>
                        <Pressable>
                            <Text style={{ color: '#3b82f6', fontSize: 14, fontWeight: 'bold', textAlign: 'right' }}>
                                Forgot Password?
                            </Text>
                        </Pressable>
                    </View>


                    {/* Sign In Button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Sign In</Text>
                    </TouchableOpacity >

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, gap: 10, justifyContent: 'space-between' }} >
                        <View style={{ borderBottomWidth: 1, width: '30%', borderColor: 'gray' }} ></View>
                        <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center', marginVertical: 15 }}>
                            or continure with
                        </Text>
                        <View style={{ borderBottomWidth: 1, width: '30%', borderColor: 'gray' }} ></View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20, marginBottom: 50, marginBottom: 10, gap: 20, width: '50%', alignSelf: 'center' }} >
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',borderColor:'gray' }} >
                            <Image source={require('../../Assets/Images/google.png')} style={{ width: 40, height: 40, alignSelf: 'center', marginTop: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',borderColor:'gray' }} >
                            <Image source={require('../../Assets/Images/github.png')} style={{ width: 50, height: 50, alignSelf: 'center', marginTop: 10 }} />
                        </TouchableOpacity>
                    </View>

                    {/* <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>
                        Already have an account? <Text style={{ color: '#3b82f6' }} >SignIn</Text>
                    </Text> */}
                </View>

                <View>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>
                        Don't have an account? <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={{ color: '#3b82f6' }} >Sign Up</Text></TouchableOpacity>
                    </Text>
                </View>

            </ScrollView>
        </LinearGradient>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
        width: '100%',
    },
    headText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '900',
        marginTop: 20,
    },
    textN: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 10,
    },
    card: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        backgroundColor: '#3b82f6',
        padding: 15,
        borderRadius: 15,
        width: '100%',
        marginTop: 10,
        alignSelf: 'center'
    },
})