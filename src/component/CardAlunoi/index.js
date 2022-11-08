import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function CardAluno({nome, nota1, nota2, nota3}) {
  return (
    <View style={styles.Card}>
      <Text style={styles.textTopListnome}>{nome}</Text>
      <Text style={styles.textTopList}>{nota1}</Text>
      <Text style={styles.textTopList}>{nota2}</Text>
      <Text style={styles.textTopList}>{nota3}</Text>
    </View>
  );
}
