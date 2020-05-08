import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import Screen4 from "./src/screens/Screen4";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{
          title: "Screen3",
          headerTitleAlign: "center",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="opendrawer"
              color="skyblue"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeRoot({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          title: "Home",
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="opendrawer"
              color="skyblue"
            />
          ),
        }}
      />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeRoot">
        <Drawer.Screen name="HomeRoot" component={HomeRoot} />
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
