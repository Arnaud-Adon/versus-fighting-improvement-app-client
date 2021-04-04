import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateNote, getNoteId } from "../../lib/state/actions";
import { getUserInformations } from "../../lib/state/selectors";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const UpdateNote = ({ note, getShowUpdateNoteInput }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(note.text);
  const user = useSelector((state) => getUserInformations(state));

  const setShowUpdateNoteInput = (value) => {
    dispatch(getNoteId(null));
    getShowUpdateNoteInput(value);
  };

  const validateNote = () => {
    const data = {
      userId: user._id,
      noteId: note._id,
      text: text,
    };
    dispatch(updateNote(data));
    setShowUpdateNoteInput(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowUpdateNoteInput(false)}>
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
        <Text style={styles.validateButtonStyle}>Modifier</Text>
      </TouchableOpacity>
    </View>
  );
};

UpdateNote.propTypes = {
  getShowUpdateNoteInput: PropTypes.func.isRequired,
};

export default UpdateNote;

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
