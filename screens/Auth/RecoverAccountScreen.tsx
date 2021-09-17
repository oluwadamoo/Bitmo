import React from 'react'
import { useState } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import { styles } from './styles'

const logo = require('../../assets/images/logos/blue.png')
export default function RecoverAccountScreen() {
    const [email, setEmail] = useState("")
    return (
        <View style={styles.container}>
            <View style={[styles.wrapper, { marginTop: -10 }]}>
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

                    <Button title="Search Account" />

                    <View style={{ width: Dimensions.get('screen').width / 2, height: .5, alignSelf: 'center', marginTop: 20, marginBottom: -5, backgroundColor: "#303030" }} />

                    <Button title="Login" />

                </View>
            </View>
        </View>
    )
}
