import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { collection, addDoc } from "firebase/firestore";
import db from '../../config/configFirebase'

import styles from './styles';

export default function AddAluno() {
    const [nome, setNome] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');

    const SubirNota = async () =>{
        if(nome === '' || nota1 ==='' || nota2 ==='' || nota3 ===''){
            alert('Preencha os campos');
        }else{
            try {
                const docRef = await addDoc(collection(db, "Alunos"), {
                  nome: nome,
                  nota1: nota1,
                  nota2: nota2,
                  nota3: nota3,
                });
                console.log("Document written with ID: ", docRef.id);
                alert('Nota aplicada')
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Subir notas</Text>

            <TextInput
                style={styles.input}
                placeholder='Digite um nome'
                type='text'
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite a 1° nota'
                type='text'
                onChangeText={(text) => setNota1(text)}
                value={nota1}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite a 2° nota'
                type='text'
                onChangeText={(text) => setNota2(text)}
                value={nota2}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite a 3° nota'
                type='text'
                onChangeText={(text) => setNota3(text)}
                value={nota3}
            />

            <TouchableOpacity style={styles.btn} onPress={SubirNota}>
                <Text style={styles.btnText}>Subir</Text>
            </TouchableOpacity>
        </View>
    );
}