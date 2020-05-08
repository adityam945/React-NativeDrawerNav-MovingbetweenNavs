import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Screen4"
        onPress={() => navigation.navigate("Screen4")}
      />
      <Text>Screen4 is nested in HomeRoot so we get back to this screen</Text>
      <Button
        title="Go to Screen3"
        onPress={() =>
          navigation.navigate("Root", {
            screen: "Screen3",
          })
        }
      />
      <Text>Screen3 is nested in Root so we dont get back to this screen</Text>
    </View>
  );
}
