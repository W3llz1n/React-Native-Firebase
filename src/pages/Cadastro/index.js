import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail} from "firebase/auth";
import db from '../../config/configFirebase'


import styles from './styles';

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Cadastrar = () => {

        if (email === '' || senha === '') {
            alert('Preencha os campos');
        } else {
            const auth = getAuth();
            fetchSignInMethodsForEmail(auth, email)
                .then((result) => {
                    if (result.length >= 1) {
                        alert('Esse email já existe')
                    } else {
                        const auth = getAuth();
                        createUserWithEmailAndPassword(auth, email, senha)
                            .then((userCredential) => {
                                // Signed in
                                const user = userCredential.user;
                                navigation.navigation('Login');
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorMessage)
                            });
                    }
                })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastrar</Text>
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                type='text'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite sua senha'
                type='text'
                onChangeText={(text) => setSenha(text)}
                value={senha}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={Cadastrar}>
                <Text style={styles.btnText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}