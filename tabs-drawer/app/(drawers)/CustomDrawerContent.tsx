import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <DrawerItem
          label={"Home"}
          onPress={() => router.push("/(drawers)/(tabs)")}
        />
        <DrawerItem
          label={"Services"}
          onPress={() => router.push("/(drawers)/(tabs)/services")}
        />
        <DrawerItem
          label={"Profile"}
          onPress={() => router.push("/(drawers)/(tabs)/profile")}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({});
