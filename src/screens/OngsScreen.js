import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import BackButton from "../components/BackButton";

export default function OngsScreen({ navigation }) {

  const abrirSite = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation}/>
      <Text style={styles.title}>ONGs em Aracaju</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => abrirSite("https://www.gpaa.com.br")}
      >
        <Text style={styles.buttonText}>GPAA - Grupo de Proteção Animal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => abrirSite("https://www.instagram.com/protecaoanimalaracaju")}
      >
        <Text style={styles.buttonText}>Proteção Animal Aracaju</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => abrirSite("https://www.instagram.com/amigosdosanimaisaju")}
      >
        <Text style={styles.buttonText}>Amigos dos Animais Aju</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => abrirSite("https://www.instagram.com/projetoamparoanimal")}
      >
        <Text style={styles.buttonText}>Projeto Amparo Animal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => abrirSite("https://www.instagram.com/sosanimaisaracaju")}
      >
        <Text style={styles.buttonText}>SOS Animais Aracaju</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "#b00000", marginBottom: 20 },
  button: {
    backgroundColor: "#b00000",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
  },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});