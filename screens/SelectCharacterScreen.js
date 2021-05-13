import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Colors } from "../lib/utils/colors";
import { connect } from "react-redux";
import { addCharacter } from "../lib/state/actions";
import { useCharacter, withCharacterContext } from "../lib/hooks/useCharacter";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button/Button";
import CharacterList from "../components/Character/CharacterList";
import Skills from "../components/Character/Skills";

const SelectCharacterScreen = (props) => {
  const { character } = useCharacter();
  const onSubmit = () => {};
  return (
    <LinearGradient
      testID="select-character-screen"
      style={styles.container}
      colors={[Colors.DARKER_RED, Colors.DARKER_BLUE, Colors.LIGHTER_BLUE]}
    >
      <Text testID="select-character-screen-title" style={styles.title}>
        Selectionner un personnage
      </Text>
      <CharacterList {...props} />
      <Skills character={character} />
      <Button
        testID="button"
        style={styles.button}
        onPress={onSubmit}
        firstColor={Colors.DARKER_RED}
        secondColor={Colors.DARKER_RED}
        label="Valider"
      />
    </LinearGradient>
  );
};

export default connect(
  (state) => {
    return {
      characters: state.character.characters,
    };
  },
  { addCharacter }
)(SelectCharacterScreen);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.WHITE,
  },
  button: {
    paddingVertical: 5,
    width: Dimensions.get("window").width - 200,
    alignSelf: "center",
    borderRadius: 5,
    textAlign: "center",
    color: "#fff",
  },
});
