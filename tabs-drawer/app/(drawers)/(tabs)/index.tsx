import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { navigate } from "expo-router/build/global-state/routing";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigate = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 50, paddingVertical: 70 }}>
      {/* <StatusBar barStyle={"dark-content"} />
      <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
        <Text style={styles.heading}>Welcome to DevelopMe</Text>
        <Text style={styles.description}>
          DevelopMe is a platform for newbies to learn how to code from scratch.
        </Text>
      </Animated.View> */}
      <TouchableOpacity
        onPress={() => navigate.dispatch(DrawerActions.toggleDrawer)}
      >
        <EvilIcons name="navicon" size={34} />
      </TouchableOpacity>
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
