import React from "react";
import { View, Text, Button } from "react-native";

const SettingsScreen = ({ navigation }) => (
  <View>
    <Text>Settings Screen</Text>
    <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
  </View>
);

export default SettingsScreen;
