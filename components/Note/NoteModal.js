import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
} from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../lib/utils/colors";
import Button from "../Button/Button";
import tagList from "../../lib/utils/constants/tags";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const NoteTags = ({ isVisible, tags, onPress, selected, ...others }) => {
  return (
    isVisible && (
      <View {...others} style={styles.tagContent}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            style={[
              {
                backgroundColor: `rgba(${(index * 13) % 255}, ${
                  (index * 35) % 255
                }, ${(index * 4) % 255}, .5)`,
              },
              styles.tag,
            ]}
            key={index}
            onPress={() => (selected ? onPress(tag, "remove") : onPress(tag))}
          >
            <Text>{tag}</Text>
            {selected && (
              <Entypo name="circle-with-cross" size={20} color="white" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    )
  );
};

const NoteModal = ({ isVisible, setModal, type = "new" }) => {
  const [tags, setTags] = useState([]);
  const [noteText, setNoteText] = useState("");
  const isValid = Boolean(tags.length > 0 && !!noteText);

  const onNoteSubmit = () => {
    console.log("noteText", noteText);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleOnTag = (name, type = "add") => {
    if (type === "remove") {
      let tagsFiltered = tags.filter((tag) => tag !== name);
      setTags(tagsFiltered);
    } else {
      let tagsAdded = [...tags];
      if (!tagsAdded.includes(name)) {
        tagsAdded.push(name);
        setTags(tagsAdded);
      }
    }
  };

  useEffect(() => {
    LayoutAnimation.spring();
  });

  return (
    isVisible && (
      <View testID="note-modal" style={styles.container}>
        <BlurView
          testID="note-blur"
          intensity={100}
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor="white"
        />

        <View style={styles.buttons}>
          <Button
            style={[styles.button, { opacity: !isValid ? 0.3 : 1 }]}
            label="Valider la note"
            firstColor={Colors.LIGHTER_BLUE}
            secondColor={Colors.LIGHTER_BLUE}
            onPress={onNoteSubmit}
            disabled={!isValid}
          />
          <Button
            testID="close-modal"
            style={[styles.button]}
            label="Annuler"
            firstColor={Colors.DARKER_RED}
            secondColor={Colors.DARKER_RED}
            onPress={closeModal}
          />
        </View>

        <NoteTags
          testID="tag-note-list"
          isVisible={tagList.length > 0}
          tags={tagList}
          onPress={handleOnTag}
        />

        <LinearGradient
          testID="note-form"
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 0.5, y: 1.0 }}
          locations={[0, 0.2]}
          colors={[Colors.LIGHTER_YELLOW, Colors.DARKER_YELLOW]}
          style={styles.noteForm}
        >
          <MaterialCommunityIcons
            testID="paper-clip-icon"
            name="paperclip"
            size={50}
            color="grey"
            style={styles.paper_clip_icon}
          />
          <NoteTags
            isVisible={tags.length > 0}
            tags={tags}
            onPress={handleOnTag}
            selected
          />
          <TextInput
            testID="note-input"
            multiline
            maxLength={150}
            style={styles.noteInput}
            placeholder={
              type === "new"
                ? "Entrer une note relative à un personnage, y asssocié au moins un tag"
                : "Modifier la note actuelle"
            }
            onChangeText={setNoteText}
          />
        </LinearGradient>
      </View>
    )
  );
};

export default NoteModal;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  paper_clip_icon: {
    position: "absolute",
    top: -10,
    left: "80%",
  },
  noteForm: {
    paddingHorizontal: 20,
    width: SCREEN_WIDTH * 0.8,
    height: 500,
    borderWidth: 1,
  },
  noteInput: {
    fontSize: 20,
    width: SCREEN_WIDTH * 0.7,
  },
  tag: {
    padding: 5,
    marginLeft: 5,
    borderRadius: 10,
  },
  tagContent: {
    paddingVertical: 20,
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: "row",
  },
  disabledButton: {
    opacity: 0.3,
  },
});
