import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to DevelopMe, your go-to solution to coming a full stack and
        more. Our mission is to provide a seamless experience that enhances your
        daily life.
      </Text>
      <Text style={styles.missionTitle}>Our Mission</Text>
      <Text style={styles.description}>
        At DevelopMe, we believe in innovation, simplicity, and user-friendly
        experiences. We are committed to delivering high-quality solutions that
        meet your needs and exceed expectations.
      </Text>
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#ddc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#555",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#666",
  },
});
