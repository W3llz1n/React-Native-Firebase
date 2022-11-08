import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { collection, getDocs } from "firebase/firestore";
import db from "../../config/configFirebase";

import CardAluno from "../../component/CardAlunoi";

import styles from "./styles";

export default function Home() {
  const [reload, setReload] = useState(false);
  const [post, setPost] = useState([]);

  const fetchPublicacoes = async () => {
    const querySnapshot = await getDocs(collection(db, "Alunos"));
    const List = [];
    querySnapshot.forEach((doc) => {
      List.push({ ...doc.data(), id: doc.id });
      console.log(doc.id, "=>", doc.data());
    });
    console.log(post);
    return setPost(List);
  };

  useEffect(() => {
    fetchPublicacoes();
  }, [reload]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BEM-VINDO</Text>
      <TouchableOpacity style={styles.btnReload} onPress={() => setReload(!reload)}>
        <AntDesign name="reload1" size={24} color="#00FFFF" />
      </TouchableOpacity>
      <View style={styles.viewTopList}>
        <Text style={styles.textTopListNome}>Nome</Text>
        <Text style={styles.textTopList}>Nota 1</Text>
        <Text style={styles.textTopList}>Nota 2</Text>
        <Text style={styles.textTopList}>Nota 3</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={post}
        renderItem={({ item }) => {
          return (
            <CardAluno
              nome={item.nome}
              nota1={item.nota1}
              nota2={item.nota2}
              nota3={item.nota3}
            />
          );
        }}
      />
    </View>
  );
}
