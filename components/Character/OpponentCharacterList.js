import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import Character from "./Character";
import closeIcon from "../../assets/images/functions/close-icon.png";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const OpponentCharacterList = ({
  charactersList,
  getShowOpponentListInput,
  getOpponentIdSelected,
}) => {
  const opponentChoice = (characterId) => {
    getOpponentIdSelected(characterId);
    setShowOpponentListInput(false);
  };

  const setShowOpponentListInput = () => {
    getShowOpponentListInput(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListStyle}
        data={charactersList}
        horizontal={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              opponentChoice(item._id);
            }}
          >
            <Character opponentList imageSrc={item.name} name={item.name} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <TouchableOpacity onPress={setShowOpponentListInput}>
        <Image style={styles.closeIconStyle} source={closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default OpponentCharacterList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 15,
    paddingBottom: Constants.statusBarHeight * 4,
    position: "absolute",
    width,
    height,
    flexDirection: "row",
    backgroundColor: "blue",
    zIndex: 1,
    color: "#fff",
  },
  flatListStyle: {
    width: 300,
  },
  closeIconStyle: {
    width: 50,
    height: 50,
  },
});
