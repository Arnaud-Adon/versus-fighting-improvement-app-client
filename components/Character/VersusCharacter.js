import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Character from "./Character";
import versusLogo from "../../assets/images/screen/vs.png";
import { useNavigation } from "@react-navigation/native";

const VersusCharacter = ({ character, opponent }) => {
  const { navigate } = useNavigation();

  const gotoSelectCharacter = (type) => {
    navigate("SelectCharacter", type);
  };

  const renderCharacterSelected = (character, type) => {
    return (
      <TouchableOpacity
        testID={`character-selected-${type}`}
        onPress={() => gotoSelectCharacter(type)}
      >
        <Character name={character.name} />
      </TouchableOpacity>
    );
  };

  return (
    <View testID="versus-character" style={styles.container}>
      {renderCharacterSelected(character, "user")}
      <View testID="versus-logo">
        <Image source={versusLogo} style={styles.image} />
      </View>
      {renderCharacterSelected(opponent, "opponent")}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  image: {
    width: 60,
    height: 70,
  },
});

export default VersusCharacter;
