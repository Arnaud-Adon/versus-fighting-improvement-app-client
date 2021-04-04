import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { addNote } from "../../lib/state/actions";

const { width, height } = Dimensions.get("window");

const AddNote = ({
  userId,
  characterId,
  opponentCharacterId,
  getShowAddNote,
}) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const setShowAddNote = (value) => {
    getShowAddNote(value);
  };

  const validateNote = () => {
    const data = {
      userId,
      characterId,
      opponentCharacterId,
      text: text,
    };

    dispatch(addNote(data));
    getShowAddNote(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowAddNote(false)}>
        <Text style={styles.cancelTextStyle}>Annuler</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInputStyle}
        multiline
        numberOfLines={20}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <TouchableOpacity onPress={() => validateNote()}>
        <Text style={styles.validateButtonStyle}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width,
    height,
    paddingVertical: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "silver",
  },
  cancelTextStyle: {
    margin: 20,
    fontSize: 15,
    fontWeight: "600",
    color: "red",
  },
  textInputStyle: {
    width: width - 80,
    height: 300,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  validateButtonStyle: {
    marginVertical: 20,
    paddingVertical: 15,
    width: width - 180,
    height: 50,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    backgroundColor: "blue",
    borderTopLeftRadius: 10,
  },
});
