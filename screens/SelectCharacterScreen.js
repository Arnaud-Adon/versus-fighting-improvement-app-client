import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Colors } from "../lib/utils/colors";
import { connect } from "react-redux";
import { addCharacter } from "../lib/state/actions";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button/Button";
import CharacterList from "../components/Character/CharacterList";
import Skills from "../components/Character/Skills";

const SelectCharacterScreen = ({ user, addCharacter, characters }) => {
  const [characterSelected, setCharacterSelected] = useState({});

  const handleCharacter = (id) => {
    setCharacterSelected(
      characters.filter((character) => character._id === id)[0]
    );
  };

  const onSubmit = () => {
    const data = { userId: user._id, characterId: characterSelected._id };
    addCharacter(data);
  };

  useEffect(() => {
    setCharacterSelected(characters[0]);
  }, [characters]);

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.DARKER_RED, Colors.DARKER_BLUE, Colors.LIGHTER_BLUE]}
    >
      <View testID="select-character-screen">
        <Text testID="select-character-screen-title" style={styles.title}>
          Sélectionner un personnage
        </Text>
        <CharacterList
          characters={characters}
          character={characterSelected}
          handleCharacter={handleCharacter}
        />
        <Skills character={characterSelected} />
        <Button
          testID="button"
          style={styles.button}
          onPress={onSubmit}
          firstColor={Colors.DARKER_RED}
          secondColor={Colors.DARKER_RED}
          label="Valider"
        />
      </View>
    </LinearGradient>
  );
};

export default connect(
  (state) => {
    return {
      user: state.user.infos,
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
