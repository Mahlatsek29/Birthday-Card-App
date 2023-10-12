import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Easing } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SplashScreen({ navigation }) {
  const [heartColor, setHeartColor] = useState("limegreen"); // Updated heartColor value
  const heartScale = new Animated.Value(1);

  const handleHeartPress = () => {
    setHeartColor("orange");
    navigation.navigate("CardScreen");
  };

  const startPulsatingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(heartScale, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(heartScale, {
          toValue: 1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  useEffect(() => {
    startPulsatingAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("./assets/rainbow.gif")} style={styles.background} />
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Touch My Heart</Text>
        <TouchableOpacity style={styles.heartButton} onPress={handleHeartPress}>
          <Animated.View style={{ transform: [{ scale: heartScale }] }}>
            <Icon name="heart" size={40} color={heartColor} />
          </Animated.View>
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
    color: "limegreen", 
    fontSize: 24,
    marginBottom: 20,
  },
  heartButton: {
    backgroundColor: "transparent",
    borderRadius: 50,
    padding: 10,
  },
});
