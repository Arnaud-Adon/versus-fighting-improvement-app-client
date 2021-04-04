import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CharacterList from "../components/Character/CharacterList";
import Skill from "../components/Character/Skill";
import { addCharacter } from "../lib/state/actions";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

const SelectCharacterScreen = ({ addCharacter, navigation }) => {
  const dispatch = useDispatch();
  const { container, titleStyle, buttonStyle } = styles;
  const [caracterId, setCharacterId] = useState(null);
  const [skills, setSkills] = useState("");
  const { charactersList: characters } = useSelector(
    (state) => state.characters
  );
  const { informations: user } = useSelector((state) => state.user);

  useEffect(() => {
    if (characters.length > 0 && !caracterId && !skills) {
      setCharacterId(characters[0]._id);
      setSkills(characters[0].skills);
    }
  }, [characters]);

  const getSkills = ({ _id, skills }) => {
    setCharacterId(_id);
    setSkills(skills);
  };

  const submitCharacter = () => {
    const data = { userId: user._id, caracterId };
    dispatch(addCharacter(data));
  };

  return (
    <View style={container}>
      <Text style={titleStyle}>Veuillez sélectionner votre personnage</Text>
      <CharacterList getSkills={getSkills} />
      <Skill skills={skills} />
      <TouchableOpacity onPress={submitCharacter}>
        <Text style={buttonStyle}>Valider</Text>
      </TouchableOpacity>
      <Text>SelectCharacterScreen</Text>
    </View>
  );
};

SelectCharacterScreen.propTypes = {
  characters: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default SelectCharacterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonStyle: {
    paddingVertical: 5,
    width: width - 200,
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#333399",
    textAlign: "center",
    color: "#fff",
  },
});
