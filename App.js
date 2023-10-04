import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CARD_WIDTH = 300; 

const RainbowText = ({ children }) => {
  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  return (
    <Text style={styles.rainbowText}>
      {children.split("").map((char, index) => (
        <Text
          key={index}
          style={{ color: rainbowColors[index % rainbowColors.length] }}
        >
          {char}
        </Text>
      ))}
    </Text>
  );
};

export default function App() {
  const messagePrefix = "Just like a vibrant ";
  const messageSuffix =
    ", you bring so much joy and positivity into my life.\nMay your day be as bright and wonderful as you are!";

  return (
    <View style={styles.container}>
      <View style={[styles.image, { width: CARD_WIDTH }]}>
        <Image
          source={require("./assets/gif.gif")}
          style={[styles.image, { width: CARD_WIDTH }]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.message}>
          {messagePrefix}
          <RainbowText>RAINBOW</RainbowText>
          {messageSuffix}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    height: CARD_WIDTH,
    marginBottom: 10, 
  },
  textContainer: {
    backgroundColor: "black",
    paddingHorizontal: 30,
    paddingTop: 6, 
    paddingBottom: 15, 
  },
  message: {
    fontSize: 12, 
    textAlign: "center",
    color: "white",
  },
  rainbowText: {
    fontSize: 12, // Using a fixed font size
    flexDirection: "row",
  },
});
