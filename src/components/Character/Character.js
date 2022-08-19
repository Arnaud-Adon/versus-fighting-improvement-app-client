import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Colors } from "../../lib/utils/colors";
import renderImageRequire from "../../lib/utils/image/RequireImageList";

const Character = ({ name }) => {
  return (
    <View testID="character" style={styles.container}>
      <Image
        testID="character-image"
        style={styles.image}
        source={renderImageRequire(name)}
      />
      <Text testID="character-name" style={styles.name}>
        {name}
      </Text>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  name: {
    fontWeight: "600",
    textAlign: "center",
    color: Colors.WHITE,
  },
});
