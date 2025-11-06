import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import OngsScreen from "../screens/OngsScreen";
import FeedBack from "../screens/FeedBack";
import StatusDaDenuncia from "../screens/StatusDaDenuncia";
import InformacoesParaAjuda from "../screens/InformacoesParaAjuda";
import Denunciar from "../screens/Denunciar";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Denunciar" component={Denunciar} />
        <Stack.Screen name="Denuncia" component={StatusDaDenuncia} />
        <Stack.Screen name="Ongs" component={OngsScreen} />
        <Stack.Screen name="InformacoesParaAjuda" component={InformacoesParaAjuda} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
