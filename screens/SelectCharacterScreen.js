import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import CharacterList from "../components/Character/CharacterList";

const { width } = Dimensions.get("window");

const SelectCharacterScreen = () => {
  return (
    <View testID="select-character-screen" style={styles.container}>
      <Text testID="select-character-screen-title">Choisir un personnage</Text>
      {/* <CharacterList /> */}
    </View>
  );
};

export default SelectCharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    paddingVertical: 5,
    width: width - 200,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#333399",
    textAlign: "center",
    color: "#fff",
  },
});
