import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import { styles } from './styles'

const logo = require('../../assets/images/logos/blue.png')
export default function LoginScreen() {

    const navigation = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.authTop}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.authForm}>
                    <TextInput
                        placeholder="Email"
                        style={styles.authInput}
                        placeholderTextColor="#303030"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#303030"
                        style={styles.authInput}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Button title="Login" />

                    <Pressable
                        onPress={() => navigation.navigate("SignUp")}
                        style={({ pressed }) => [{ opacity: pressed ? .5 : 1, backgroundColor: '#00709e', height: 38, alignItems: 'center', justifyContent: 'center', borderRadius: 14, marginTop: 20 }]}>
                        <Text style={{ color: '#fff', fontSize: 19 }}>Sign Up</Text>
                    </Pressable>

                    <View style={{ marginTop: 20, alignItems: 'center' }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>OR</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18 }}>Forgotten Password?</Text>
                            <Pressable onPress={() => navigation.navigate("Recover Account")}>
                                <Text style={{ fontSize: 18, marginLeft: 8, color: '#0000ee' }}>Reset here</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
