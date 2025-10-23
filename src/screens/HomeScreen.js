import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Alert } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";


  const handlePressShield = () => {
    Alert.alert('🛡️ Você clicou no escudo!');
  };
    const handlePressMenu = () => {
    Alert.alert('📂 Você clicou no menu!');
  };
   const handlePressUser = () => {
    Alert.alert('👤 Você clicou no usuário!');
  };
    const handleclock = () => {
    Alert.alert('Você clicou no usuario');
  };
export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Header */}
      <View style={styles.header}>

        <TouchableOpacity onPress={handlePressMenu} size={36} color="#b00000">
            <Ionicons>
            <Image source={require('../../assets/menuamburguer.png')} style={styles.icons2} />
        </Ionicons>
        </TouchableOpacity>   

        <Ionicons> 
            <Image source={require('../../assets/escudo.png')} style={styles.icons2} />
        </Ionicons>
        <TouchableOpacity onPress={handlePressUser} size={36} color="#b00000">
            <Ionicons>
            <Image source={require('../../assets/profile.png')} style={styles.icons2} />
        </Ionicons>
        </TouchableOpacity>    

        </View>

      {/* Escudo */}
      <View style={styles.shieldContainer}>
        <TouchableOpacity onPress={handlePressShield} size={36} color="#b00000">
            
            <Image source={require('../../assets/escudado.png')} style={styles.central} />
        
        </TouchableOpacity>     
      </View>
      

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Adotar")}>
            <Image source={require('../../assets/patinhas.png')} style={styles.icons} />
          <Text style={styles.buttonText}>Adotar{"\n"}um Amigo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ongs")}>
            <Image source={require('../../assets/maps.png')} style={styles.icons} />
          <Text style={styles.buttonText}>ONG’s{"\n"}mais próximas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Ongs")}>
            <Image source={require('../../assets/lup.png')} style={styles.icons} />
          <Text style={styles.buttonText}>Mais{"\n"}Informacoes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("QueroAjudar")}>
            <Image source={require('../../assets/core.png')} style={styles.icons} />
          <Text style={styles.buttonText}>Quero{"\n"}ajudar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "space-between", 
    paddingTop: 60 },

  header: { 
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
  left:"11%", 
},
    
  shieldContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" },

  escudo:{
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
    central:{
    width: 290,
    height: 540,
    justifyContent: "center",
    alignItems: "center",
    top:"10%",
  },

  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 50,
    top:"26%",
    left:"9.5%",
  },
button: {
  width: "40%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",

},
    icons: {
    width: "40%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#b00000",
    borderWidth: 0,       
    borderRadius: 15,  
    resizeMode: "contain", // mantém proporção
    shadowColor: "#000",
  shadowOpacity: 0.7,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 4,
  elevation: 9, // (Android)
  },

  icons2: {
    width: "40%",
    height: "30%",
  },
  buttonText: { color: "#b00000", fontWeight: "bold", textAlign: "center", marginTop: 6 },
});
