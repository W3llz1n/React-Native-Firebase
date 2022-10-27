import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import db from '../../config/configFirebase'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                navigation.navigate("Home")
                // ...
            }
        });
    });

    const Logar = () => {

        if (email === '' || senha === '') {
            alert('Preencha os campos');
        } else {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigation.navigate('Home')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
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
            <View>
                <Text style={styles.textCadastro}>Você ainda não se cadastrou?
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.btnCadastro}> Cadastre-se</Text>
                    </TouchableOpacity>
                </Text>
            </View>


            <TouchableOpacity style={styles.btn} onPress={Logar}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}