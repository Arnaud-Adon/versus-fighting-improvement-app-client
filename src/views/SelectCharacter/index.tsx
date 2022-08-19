import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../lib/utils/colors";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/Button/Button";
import CharacterList from "../components/Character/CharacterList";
import Skills from "../components/Character/Skills";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelectCharacterContext } from "../lib/context/selectCharacterContext";

const Loading = () => {
  return <ActivityIndicator testID="loading-select-character" size="large" />;
};

const BackImproveButton = ({ isVisible, onPress }) => {
  return (
    isVisible && (
      <Button
        testID="back-button"
        style={styles.button}
        onPress={onPress}
        firstColor={Colors.DARKER_BLUE}
        secondColor={Colors.DARKER_BLUE}
        label="Retour"
      />
    )
  );
};

const SelectCharacterScreen = ({ characters }) => {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const {
    userCharacter,
    opponentCharacter,
    setUserCharacter,
    setOpponentCharacter,
  } = useSelectCharacterContext();
  const [characterSelected, setCharacterSelected] = useState(null);

  const handleCharacter = (id) => {
    setCharacterSelected(
      characters.filter((character) => character._id === id)[0]
    );
  };

  const onSubmit = () => {
    if (params && params?.type === "opponent") {
      setOpponentCharacter(characterSelected);
    } else {
      setUserCharacter(characterSelected);
    }
    navigate("Improve");
  };

  useEffect(() => {
    if (params?.type !== undefined) {
      if (params?.type === "user") setCharacterSelected(userCharacter);
      else if (params?.type === "opponent")
        setCharacterSelected(opponentCharacter);
    } else setCharacterSelected(characters[0]);
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.DARKER_RED, Colors.DARKER_BLUE, Colors.LIGHTER_BLUE]}
    >
      {!characterSelected ? (
        <Loading />
      ) : (
        <View testID="select-character-screen">
          <Text testID="select-character-screen-title" style={styles.title}>
            Sélectionner un personnage
          </Text>
          <CharacterList
            characters={characters}
            character={characterSelected}
            handleCharacter={handleCharacter}
            direction={true}
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
          <BackImproveButton
            isVisible={params?.type === "user" || params?.type === "opponent"}
            onPress={() => navigate("Improve")}
          />
        </View>
      )}
    </LinearGradient>
  );
};

export default connect((state) => {
  return {
    characters: state.character.characters,
  };
}, null)(SelectCharacterScreen);

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
