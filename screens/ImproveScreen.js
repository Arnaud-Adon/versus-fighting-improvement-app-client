import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import versusLogo from "../assets/images/screen/vs.png";
import OpponentCharacter from "../components/Character/OpponentCharacter";
import UserCharacter from "../components/Character/UserCharacter";
import OpponentNote from "../components/Note/OpponentNote";
import UserInfo from "../components/User/UserInfo";

const ImproveScreen = () => {
  return (
    <View testID="improve-screen">
      <View style={styles.user}>
        <UserInfo />
        <UserCharacter />
      </View>
      <View testID="improve-screen-logo" style={styles.image}>
        <Image source={versusLogo} />
      </View>
      <View style={styles.opponent}>
        <OpponentCharacter />
        <OpponentNote />
      </View>
    </View>
  );
};

export default ImproveScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  user: {},
  image: {
    width: 100,
    height: 120,
  },
  opponent: {},
});
