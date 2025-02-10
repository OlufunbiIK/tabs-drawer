import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";

const index = () => {
  return <Redirect href={"/(drawers)/(tabs)"} />;
};

export default index;

const styles = StyleSheet.create({});
