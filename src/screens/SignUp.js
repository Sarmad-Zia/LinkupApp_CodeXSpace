import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { InputField } from '../componets/InputFeilds'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <LinearGradient
            colors={['#3b82f6', '#ffffff']}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.2, y: 1 }}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={require('../../Assets/Images/logo.png')} style={{ width: 100, height: 100 }} />
                <Text style={styles.headText}>Create Free Account</Text>
                <Text style={styles.textN}>Join professionals worldwide on Free LinkUp</Text>

                <View style={styles.card}>
                    {/* First & Last Name Fields Row */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                        <View style={{ width: '48%' }}>
                            <InputField
                                name="firstName"
                                label="First Name"
                                placeholder="John"
                                icon="User"
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                        </View>

                        <View style={{ width: '48%' }}>
                            <InputField
                                name="lastName"
                                label="Last Name"
                                placeholder="Doe"
                                icon="User"
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </View>
                    </View>

                    {/* Email Field */}
                    <View style={{ width: '100%', marginBottom: 15 }}>
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
                    <View style={{ width: '100%', marginBottom: 15 }}>
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

                    {/* Confirm Password Field */}
                    <View style={{ width: '100%', marginBottom: 20 }}>
                        <InputField
                            name="ConfirmPassword"
                            label="Confirm Password"
                            placeholder="••••••••"
                            icon="Lock"
                            value={confirmPassword}
                            inputType={true}
                            onChangeText={setConfirmPassword}
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Sign Up</Text>
                    </TouchableOpacity >

                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>
                        Already have an account? <TouchableOpacity onPress={() => navigation.navigate('SignIn')}><Text style={{ color: '#3b82f6' }} >Sign In</Text></TouchableOpacity>
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