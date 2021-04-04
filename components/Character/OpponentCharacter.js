import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Character from "./Character";
import downArrowImage from "../../assets/images/functions/down-arrow.png";

const OpponentCharacter = ({ name, getShowOpponentListInput }) => {
  const setShowOpponentListInput = (value) => {
    getShowOpponentListInput(value);
  };

  return (
    <View style={styles.container}>
      <Character opponentCharacter name={name} />
      <TouchableOpacity onPress={() => setShowOpponentListInput(true)}>
        <Image style={styles.imageStyle} source={downArrowImage} />
      </TouchableOpacity>
    </View>
  );
};

export default OpponentCharacter;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  imageStyle: {
    width: 50,
  },
});
