import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";
import { getNoteId, deleteNote } from "../../lib/state/actions";
import { getUserInformations } from "../../lib/state/selectors";

const Note = ({ id, text }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => getUserInformations(state));

  const confirmUpdateNote = (noteId) => {
    console.log("confirmUpdateNote id", noteId);
    dispatch(getNoteId(noteId));
  };

  const comfirmDeleteNote = (noteId) => {
    const data = {
      userId: user._id,
      noteId,
    };
    return Alert.alert(
      "Voulez-vous supprimmer cette note ?",
      null,
      [
        {
          text: "Non",
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => dispatch(deleteNote(data)),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
      <View style={styles.actionIconStyle}>
        <TouchableOpacity onPress={() => confirmUpdateNote(id)}>
          <Ionicons style={styles.updateIconStyle} name={`${PREFIX}-brush`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => comfirmDeleteNote(id)}>
          <Ionicons style={styles.deleteIconStyle} name={`${PREFIX}-close`} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Note;

const styles = StyleSheet.create({
  container: {
    height: 60,
    color: "#000",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "silver",
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18,
  },
  actionIconStyle: {
    position: "absolute",
    marginVertical: 10,
    marginHorizontal: 10,
    right: 0,
    width: 20,
  },
  updateIconStyle: {
    fontSize: 20,
    color: "blue",
  },
  deleteIconStyle: {
    fontSize: 25,
    color: "red",
  },
});
