import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";

const { width } = Dimensions.get("window");

const Star = ({ title, number }) => {
  const { container, titleStyle, starContainer, starStyle } = styles;
  const renderStars = () => {
    switch (number) {
      case 1:
        return (
          <View style={starContainer}>
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
          </View>
        );
        break;

      case 2:
        return (
          <View style={starContainer}>
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
          </View>
        );
        break;
      case 3:
        return (
          <View style={starContainer}>
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
          </View>
        );
        break;

      case 4:
        return (
          <View style={starContainer}>
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star-outline`} style={starStyle} />
          </View>
        );
        break;

      case 5:
        return (
          <View style={starContainer}>
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
            <Ionicons name={`${PREFIX}-star`} style={starStyle} />
          </View>
        );
        break;
    }
  };
  return (
    <View style={container}>
      <Text style={titleStyle}>{title}</Text>
      {renderStars()}
    </View>
  );
};

export default Star;

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
  },
  titleStyle: {
    fontWeight: "600",
    textAlign: "center",
  },
  starContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  starStyle: {
    fontSize: 30,
    color: "orange",
  },
});
