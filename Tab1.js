import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WebView } from "react-native-webview";

const data = [
  {
    id: "0",
    Nombre: "La cotorriza con Niurca",
    Video: "https://www.youtube.com/watch?v=nRLRxuAawKQ",
  },
  {
    id: "1",
    Nombre: "La cotorriza Oscar burgos",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "2",
    Nombre: "La cotorriza Oscar burgos",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "3",
    Nombre: "La cotorriza Oscar burgos",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "4",
    Nombre: "La cotorriza Oscar burgos",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "5",
    Nombre: "La cotorriza Oscar burgos",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "6",
    Nombre: "Mariel Camargo",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "7",
    Nombre: "Aidee Mares",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "8",
    Nombre: "Andres Echeverria",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
  {
    id: "9",
    Nombre: "Irais Buenrostro",
    Video: "https://www.youtube.com/watch?v=DslKT-XsrxE",
  },
];

const MyWeb = (item) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: item.Video }} />
    </SafeAreaView>
  );
};

const renderItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Perfil", { item })}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 10,
          cursor: "pointer",
        }}
      >
        <View style={{ height: 20, widht: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {item.Nombre}
          </Text>
          <View style={{ height: 200, widht: 200 }}>
            <WebView
              source={{ uri: item.Video }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>

          {/* <Text style={{ fontSize: 16 }}>{item.Profesion}</Text>
          <Text style={{ fontSize: 16 }}>{item.Telefono}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Buttons = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => renderItem({ item, navigation })}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
}

function ProfileScreen({ route }) {
  const { item } = route.params;
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={{ uri: item.Imagen }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
          {item.Nombre}
        </Text>
        <Text style={{ fontSize: 18 }}>{item.Profesion}</Text>
        <Text style={{ fontSize: 18 }}>{item.Telefono}</Text>
      </View>
    </View>
  );
}

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                <Image
                  source={{
                    // eslint-disable-next-line prettier/prettier
                    uri: "./icons8-casa-24.jpg",
                  }}
                  style={{ width: 50, height: 30, borderRadius: 50 }}
                />;
              },
            }}
          />
          <Stack.Screen
            name="Perfil"
            component={ProfileScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => {
                <Image
                  source={{
                    // eslint-disable-next-line prettier/prettier
                    uri: "./icons8-usuario-24.jpg",
                  }}
                  style={{ width: 50, height: 30, borderRadius: 50 }}
                />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
