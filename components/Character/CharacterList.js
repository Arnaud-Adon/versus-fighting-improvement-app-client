import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { fetchCharacters } from "../../lib/state/actions/index";
import Character from "./Character";

const { width } = Dimensions.get("window");

const CharacterList = ({ getSkills }) => {
  const dispatch = useDispatch();
  const { container, nameCharacterStyle } = styles;
  const [nameCharacter, setNameCharacter] = useState("");
  const characters = useSelector((state) => state.characters.charactersList);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  useEffect(() => {
    if (characters.length > 0 && nameCharacter === "") {
      setNameCharacter(characters[0].name);
    }
  }, [characters]);

  const choiceCharacter = (item) => {
    setNameCharacter(item.name);
    getSkills(item);
  };

  return (
    <View>
      <FlatList
        data={characters}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => choiceCharacter(item)}>
            <Character imageSrc={item.imageName} name={item.name} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <Text style={nameCharacterStyle}>{nameCharacter}</Text>
    </View>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  nameCharacterStyle: {
    marginTop: 30,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    color: "#66CC99",
  },
});
