import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";

const index = () => {
  return (
    // <View>
    //   <Text onPress={() => router.push("./(tabs)")} style={{ marginTop: 20 }}>
    //     Tabs
    //   </Text>
    // </View>
    <Redirect href={"/(tabs)"} />
  );
};

export default index;

const styles = StyleSheet.create({});
