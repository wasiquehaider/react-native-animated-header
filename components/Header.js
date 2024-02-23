import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const Header = ({
  title,
  onLeftPress,
  onRightPress,
  customStyles,
  titleAnimatedStyle,
  backgroundAnimatedStyle,
}) => {
  return (
    <Animated.View
      style={[styles.container, customStyles, backgroundAnimatedStyle]}
    >
      <TouchableOpacity style={styles.button} onPress={onLeftPress}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>

      <Animated.Text style={[styles.title, titleAnimatedStyle]}>
        {title}
      </Animated.Text>

      <TouchableOpacity style={styles.button} onPress={onRightPress}>
        <Text style={{ color: "black" }}>Follow</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default Header;
