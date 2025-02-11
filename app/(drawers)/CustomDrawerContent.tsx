import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { Feather } from "@expo/vector-icons";

const CustomDrawerContent = (props: any) => {
  const pathname = usePathname();

  const isActiveRoute = (routePath: string) => {
    return pathname === routePath;
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ backgroundColor: "#dda", height: "100%" }}
      >
        <DrawerItem
          label={"Home"}
          onPress={() => router.push("/(drawers)/(tabs)")}
          labelStyle={{
            color: isActiveRoute("/(drawers)/(tabs)") ? "red" : "black",
          }}
          icon={({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          )}
        />

        <DrawerItem
          label={"Services"}
          onPress={() => router.push("/(drawers)/(tabs)/services")}
          labelStyle={{
            color: isActiveRoute("/(drawers)/(tabs)") ? "red" : "black",
          }}
          icon={({ color, size }) => (
            <Feather name="briefcase" size={24} color={color} />
          )}
        />
        <DrawerItem
          label={"Profile"}
          onPress={() => router.push("/(drawers)/(tabs)/profile")}
          labelStyle={{
            color: isActiveRoute("/(drawers)/(tabs)") ? "red" : "black",
          }}
          icon={({ color, size }) => (
            <Feather name="user" size={24} color={color} />
          )}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
