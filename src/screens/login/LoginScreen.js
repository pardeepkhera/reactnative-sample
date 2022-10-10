import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Hideeye from '../../assets/hideeye.png';
import Logo from '../../assets/images.png';
import Eye from '../../assets/view.png';
import styles from './LoginStyles';

const LoginScreen = (navigation) => {
    console.log("login----",navigation)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false)

    const loginValidation = () => {
        if (email !== '' && password !== '') {
            navigation.navigation.navigate('Home')
        } else {
            alert('Please fill the required fields')
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.mainView}>
                <Image
                    source={Logo}
                    style={styles.imageView}
                    resizeMethod={'resize'}
                />

                <Text style={{ fontSize: 20, textAlign: 'center', paddingTop: 10, color: 'black', fontWeight: 'bold' }}>Login</Text>
            </View>



            <View style={styles.textInputStyle}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={(email) => { setEmail(email) }}
                    value={email}
                />
            </View>

            <View style={[styles.textInputStyle, { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <TextInput
                    placeholder="Password"
                    onChangeText={(text) => { setPassword(text) }}
                    value={password}
                    secureTextEntry={hidePassword}
                />
                <TouchableOpacity onPress={() => { setHidePassword(!hidePassword) }}>
                    <Image
                        source={(hidePassword) ? Hideeye : Eye}
                        style={styles.btnImage}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginView} onPress={() => { loginValidation() }}>
                <Text style={styles.loginText}> Login </Text>
            </TouchableOpacity>

        </View>
    )
}

export default LoginScreen;