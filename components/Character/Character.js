import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { renderImageRequire } from "../../lib/utils/image/RequireImageList";

const Character = ({ name }) => {
  const { container, imageStyle, textStyle } = styles;

  return (
    <View style={container}>
      <Image style={imageStyle} source={renderImageRequire(name)} />
      <Text style={textStyle}>{name}</Text>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontWeight: "600",
    textAlign: "center",
  },
});
