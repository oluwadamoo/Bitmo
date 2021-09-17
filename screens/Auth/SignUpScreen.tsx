import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Pressable, Dimensions, KeyboardAvoidingView } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import { styles } from './styles'

const logo = require('../../assets/images/logos/blue.png')
export default function SignUpScreen() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigation = useNavigation()
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}>
            <KeyboardAvoidingView
                behavior="padding"
                style={[styles.wrapper, { marginTop: -2 }]}>
                <View style={styles.authTop}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.authForm}>
                    <TextInput
                        placeholder="Email"
                        style={styles.authInput}
                        placeholderTextColor="#303030"
                        value={name}
                        onChangeText={setName}
                        keyboardType="email-address"
                    />
                    <TextInput
                        placeholder="Your Full Name"
                        style={styles.authInput}
                        placeholderTextColor="#303030"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        placeholder="Phone Number"
                        style={styles.authInput}
                        placeholderTextColor="#303030"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="number-pad"
                    />
                    <TextInput
                        placeholder="Resident Address"
                        style={styles.authInput}
                        placeholderTextColor="#303030"
                        value={address}
                        onChangeText={setAddress}
                    />

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#303030"
                        style={styles.authInput}
                        value={password}
                        onChangeText={setPassword}

                    />

                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="#303030"
                        style={styles.authInput}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}

                    />

                    <Button title="Sign Up" />
                    <View style={{ width: Dimensions.get('screen').width / 2, height: .5, alignSelf: 'center', marginTop: 20, marginBottom: -5, backgroundColor: "#303030" }} />

                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                        style={({ pressed }) => [{ opacity: pressed ? .5 : 1, backgroundColor: '#00709e', height: 38, alignItems: 'center', justifyContent: 'center', borderRadius: 14, marginTop: 20 }]}>
                        <Text style={{ color: '#fff', fontSize: 19 }}>Login</Text>
                    </Pressable>


                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}
