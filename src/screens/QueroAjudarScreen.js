import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function QueroAjudarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quero Ajudar</Text>
      <Text style={styles.text}>Informações sobre como contribuir com o projeto.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", color: "#b00000" },
  text: { marginVertical: 20 },
  button: { backgroundColor: "#b00000", padding: 10, borderRadius: 10 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
