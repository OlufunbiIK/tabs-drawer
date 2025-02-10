import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* User Avatar */}
      <Image source={{ uri: "" }} style={styles.avatar} />

      {/* User Info */}
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.bio}>Full Stack Developer | Tech Enthusiast</Text>

      {/* Profile Details */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>johndoe@example.com</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>+123 456 7890</Text>

        <Text style={styles.label}>Location:</Text>
        <Text style={styles.info}>San Francisco, CA</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ddc",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  bio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#444",
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: "#555",
  },
  button: {
    marginTop: 20,
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
