import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

// Define the type for each service item
type Service = {
  id: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

// Define the services array with explicit typing
const services: Service[] = [
  { id: "1", name: "Web Development", icon: "code-outline" },
  { id: "2", name: "Mobile App Development", icon: "phone-portrait-outline" },
  { id: "3", name: "UI/UX Design", icon: "brush-outline" },
  { id: "4", name: "Digital Marketing", icon: "megaphone-outline" },
];

// Define the props for the ServiceItem component
type ServiceItemProps = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ name, icon }) => (
  <View style={styles.serviceItem}>
    <Ionicons name={icon} size={28} color="#007bff" />
    <Text style={styles.serviceText}>{name}</Text>
  </View>
);

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Services</Text>
      <FlatList
        data={services} // Ensure 'data' matches the expected type
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Service }) => (
          <ServiceItem name={item.name} icon={item.icon} />
        )}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#ddc",
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#555",
  },
});
