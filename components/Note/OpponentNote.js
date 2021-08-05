import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../../lib/utils/colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";
import { useState } from "react";
import { useEffect } from "react";
import NoteModal from "./NoteModal";

const tags = ["Neutral", "Zoning", "VSkill", "VTrigger", "Saut", "On block"];

const noteList = [
  {
    id: 1,
    text: "En neutal, souvent usé du EX hadoken pour pouvoir faire wiffer un coup adverse",
    tags: [tags[0], tags[1]],
  },
  {
    id: 2,
    text: "text 2",
  },
  {
    id: 3,
    text: "text 3",
  },
  {
    id: 4,
    text: "text 4",
  },
  {
    id: 5,
    text: "text 5",
  },
  {
    id: 6,
    text: "text 6",
  },
];

const NoNote = () => <Text>Aucune note relative à ces personnages</Text>;

const Tags = ({ isVisible, tags, length }) => {
  return (
    isVisible && (
      <View style={styles.tagContent}>
        {tags?.map((tag, index) => (
          <View
            key={index}
            style={{
              width: 0.2 * length,
              marginLeft: 5,
              backgroundColor: `rgba(${(index * 13) % 255}, ${
                (index * 35) % 255
              }, ${(index * 4) % 255}, .5)`,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center" }}>{tag}</Text>
          </View>
        ))}
      </View>
    )
  );
};

const OpponentNote = () => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  const [modal, setModal] = useState(false);
  const boxWidth = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;

  const position = useRef(new Animated.ValueXY()).current;

  const renderItem = ({ item, index }) => (
    <Animated.View
      style={{
        transform: [
          {
            scale: position.x.interpolate({
              inputRange: [
                (index - 1) * boxWidth - halfBoxDistance,
                index * boxWidth - halfBoxDistance,
                (index + 1) * boxWidth - halfBoxDistance,
              ],
              outputRange: [0.8, 1, 0.8],
              extrapolate: "extend",
            }),
          },
        ],
      }}
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.2]}
        colors={[Colors.LIGHTER_YELLOW, Colors.DARKER_YELLOW]}
        style={{
          height: "100%",
          width: boxWidth,
        }}
      >
        <MaterialCommunityIcons
          testID="paper-clip-icon"
          name="paperclip"
          size={50}
          color="grey"
          style={styles.paper_clip_icon}
        />
        <View style={styles.noteContent}>
          <Tags
            isVisible={item.tags?.length > 0}
            tags={item.tags}
            length={boxWidth}
          />
          <Text style={styles.noteText}>{item.text}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );

  const renderNoteList = (notes) => {
    return (
      <FlatList
        testID="note-flatlist"
        data={notes}
        horizontal
        snapToAlignment="center"
        contentInsetAdjustmentBehavior="never"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        snapToInterval={boxWidth}
        contentInset={{
          left: halfBoxDistance,
          right: halfBoxDistance,
        }}
        contentOffset={{
          x: halfBoxDistance * -1,
          y: 0,
        }}
        onLayout={(e) => {
          setScrollViewWidth(e.nativeEvent.layout.width);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: position.x } } }],
          {
            useNativeDriver: false,
          }
        )}
        ListEmptyComponent={() => <NoNote />}
        keyExtractor={(item, index) => `${index}-${item.id}`}
        renderItem={renderItem}
      />
    );
  };

  useEffect(() => {
    LayoutAnimation.spring();
  });

  return (
    <>
      <View testID="opponent-note" style={styles.container}>
        <TouchableOpacity
          onPress={() => setModal(true)}
          testID="add-note"
          style={styles.add}
        >
          <Ionicons
            testID="add-icon"
            name={`${PREFIX}-add-circle-outline`}
            size={30}
            color={Colors.WHITE}
            style={styles.addIcon}
          />
          <Text style={styles.addText}>Ajouter une note</Text>
        </TouchableOpacity>
        {renderNoteList(noteList)}
      </View>
      <NoteModal isVisible={modal} setModal={setModal} />
    </>
  );
};

export default OpponentNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  add: {
    paddingVertical: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  addText: {
    fontSize: 20,
    color: Colors.WHITE,
  },
  paper_clip_icon: {
    position: "relative",
    top: -10,
    left: "80%",
  },
  tagContent: {
    padding: 10,
    flexDirection: "row",
  },
  noteContent: {
    padding: 20,
  },
  noteText: {
    fontSize: 20,
  },
});
