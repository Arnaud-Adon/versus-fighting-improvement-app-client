import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SettingScreen() {
  const { container } = styles;
  return (
    <View style={container}>
      <Text>Setting screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
