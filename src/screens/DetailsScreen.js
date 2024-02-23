import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => (
  <View>
    <Text>Details Screen</Text>
    <Button
      title="Go to Settings"
      onPress={() => navigation.navigate("Settings")}
    />
  </View>
);

export default DetailsScreen;
