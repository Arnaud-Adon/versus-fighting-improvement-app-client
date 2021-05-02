import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import TatsuRyu from "../../assets/images/loading/SF2-Ryu-Tatsumaki-Animation.gif";
import { Colors } from "../../lib/utils/colors";

const Loading = () => {
  const { container, imageStyle } = styles;
  return (
    <View testID="loading" style={container}>
      <Image testID="loading-image" style={imageStyle} source={TatsuRyu} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
