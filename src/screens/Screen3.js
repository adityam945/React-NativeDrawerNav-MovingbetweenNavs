import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function Screen3({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Screen3 Screen</Text>

      <Button
        title="Go to Screen2"
        onPress={() => navigation.navigate("Screen2")}
      />
    </View>
  );
}
