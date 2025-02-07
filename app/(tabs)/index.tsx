import { StatusBar, StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const HomeScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.heading}>Welcome to DevelopMe</Text>
        <Text style={styles.description}>
          DevelopMe is a platform for newbies to learn how to code from scratch.
        </Text>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ddc",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
