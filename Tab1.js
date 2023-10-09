import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const data = [
  {
    id: "0",
    Nombre: "Roger Plascencia",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Pintor",
    Telefono: "333286578",
  },
  {
    id: "1",
    Nombre: "Angela Aceves",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Albañil",
    Telefono: "333286578",
  },
  {
    id: "2",
    Nombre: "Dario Carrasco",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Electricista",
    Telefono: "333286578",
  },
  {
    id: "3",
    Nombre: "Tomas Pat",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Pintor",
    Telefono: "333286578",
  },
  {
    id: "4",
    Nombre: "Hilario Armendariz",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Albañil",
    Telefono: "333286578",
  },
  {
    id: "5",
    Nombre: "António Leos",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Electricista",
    Telefono: "333286578",
  },
  {
    id: "6",
    Nombre: "Mariel Camargo",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Pintor",
    Telefono: "333286578",
  },
  {
    id: "7",
    Nombre: "Aidee Mares",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Albañil",
    Telefono: "333286578",
  },
  {
    id: "8",
    Nombre: "Andres Echeverria",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Electricista",
    Telefono: "333286578",
  },
  {
    id: "9",
    Nombre: "Irais Buenrostro",
    Imagen: "https://i.pravatar.cc/300",
    Profesion: "Pintor",
    Telefono: "333286578",
  },
];

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
        <Image
          source={{ uri: item.Imagen }}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {item.Nombre}
          </Text>
          <Text style={{ fontSize: 16 }}>{item.Profesion}</Text>
          <Text style={{ fontSize: 16 }}>{item.Telefono}</Text>
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
