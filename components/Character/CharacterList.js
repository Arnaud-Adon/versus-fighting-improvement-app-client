import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useCharacter } from "../../lib/hooks/useCharacter";
import { Colors } from "../../lib/utils/colors";
import Character from "./Character";

const CharacterBlock = ({ character, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(character._id)}>
      <Character name={character.name} />
    </TouchableOpacity>
  );
};

const Name = ({ name }) => {
  return (
    <Text testID="character-selected-name" style={styles.name}>
      {name}
    </Text>
  );
};

const List = ({ characters, onPress }) => {
  return (
    <FlatList
      testID="characters"
      data={characters ?? {}}
      horizontal={true}
      renderItem={({ item }) => (
        <CharacterBlock character={item} onPress={onPress} />
      )}
      keyExtractor={(item) => item._id.toString()}
    />
  );
};

const CharacterList = ({ characters }) => {
  const { character, handleCharacterChange } = useCharacter();

  return (
    <View testID="character-list">
      <List characters={characters} onPress={handleCharacterChange} />
      <Name name={character.name} />
    </View>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  name: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.WHITE,
  },
});
