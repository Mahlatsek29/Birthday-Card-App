import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SplashScreen({ navigation }) {
  const [heartColor, setHeartColor] = useState("orange");

  const handleHeartPress = () => {
    // Change the heart icon color to neon green when pressed
    setHeartColor("neonGreen");
    navigation.navigate("CardScreen");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/rainbow.gif")}
        style={styles.background}
      />
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Touch My Heart</Text>
        <TouchableOpacity style={styles.heartButton} onPress={handleHeartPress}>
          <Icon name="heart" size={40} color={heartColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  heartButton: {
    backgroundColor: "transparent",
    borderRadius: 50,
    padding: 10,
  },
});
