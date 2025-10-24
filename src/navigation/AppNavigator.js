import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AdotarScreen from "../screens/AdotarScreen";
import OngsScreen from "../screens/OngsScreen";
import InformacoesScreen from "../screens/InformacoesScreen";
import QueroAjudarScreen from "../screens/QueroAjudarScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adotar" component={AdotarScreen} />
        <Stack.Screen name="Ongs" component={OngsScreen} />
        <Stack.Screen name="Informacoes" component={InformacoesScreen} />
        <Stack.Screen name="QueroAjudarScreen" component={QueroAjudarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
