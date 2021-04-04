import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import TatsuRyu from "../../assets/images/loading/SF2-Ryu-Tatsumaki-Animation.gif";

const Loading = () => {
  const { container, imageStyle } = styles;
  return (
    <View style={container}>
      <Image style={imageStyle} source={TatsuRyu} />
      <Text>Bienvenue...</Text>
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
