import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Image } from 'react-native'
import logo from '../../assets/images/becaicon.png'
import styles from './Style'

function Login({ navigation }) {
    const [matriculation, setMatriculation] = useState()
    const [password, setPassword] = useState()


    function test(tela) {
        Alert.alert(`aqui é: ${tela}`)
    }
    
    function handleSubmit() {
        Alert.alert(`Login: ${matriculation} Senha: ${password}`)
        setMatriculation('')
        setPassword('')
        navigation.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.union}>
                <Image style={styles.logo} source={logo} />
            </View>
            <View style={styles.LoginSquare}>
                <Text style={styles.LoginTitle}>Login</Text>
                <TextInput style={styles.InputUser} placeholder="Sua Matrícula"value={matriculation} onChangeText={setMatriculation} />
                <TextInput style={styles.InputPassword} placeholder="Senha" secureTextEntry={true} value={password} onChangeText={setPassword} />
                <Text style={styles.FrgtPassword} onPress={() => test("esqueci")}>Esqueceu sua senha?</Text>
                <TouchableOpacity style={styles.LoginButton} activeOpacity={0.8} onPressIn={() => handleSubmit()}>
                    <Text style={styles.ButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.LineLeft} />
            <Text style={styles.AnotherLogin}>Ou faça login utilizando</Text>
            <View style={styles.LineRight} />
            <TouchableOpacity style={styles.GoogleBox} activeOpacity={0.7}>
                <Text style={styles.GoogleText}>Google</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login