import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import db from '../../config/configFirebase'
import { getAuth, signOut } from "firebase/auth";

import styles from './styles'

export default function Configurações() {
  function Logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation.navigate("Login")
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => {Logout()}}><Text style={styles.btnText}>Desconectar</Text></TouchableOpacity>
    </View>
  );
}