import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { collection, getDocs } from "firebase/firestore";
import db from '../../config/configFirebase';

import styles from './styles';

export default function Home() {

    const [post, setPost] = useState([]);

    const fetchPublicacoes = async () => {
        const querySnapshot = await getDocs(collection(db, "Alunos"));
        const List = []
        querySnapshot.forEach((doc) => {
            List.push({ ...doc.data(), id: doc.id, })
            console.log(doc.id, "=>", doc.data());
        });
        console.log(post)
        return setPost(List)
    }

    useEffect(() => {
        fetchPublicacoes();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>BEM-VINDO</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={post}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: 250, height: 'auto', borderColor: '#00FFFF', borderWidth: 1, flexDirection: 'row' }}>
                            <Text style={{ color: '#fff', marginRight: 5 }}>Nome: {item.nome}</Text>
                            <Text style={{ color: '#fff', marginRight: 5 }}>Nota1: {item.nota1}</Text>
                            <Text style={{ color: '#fff', marginRight: 5 }}>Nota2: {item.nota2}</Text>
                            <Text style={{ color: '#fff', marginRight: 5 }}>Nota3: {item.nota3}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}