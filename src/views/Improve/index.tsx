import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import OpponentNote from "../components/Note/OpponentNote";
import UserInfo from "../components/User/UserInfo";
import VersusCharacter from "../components/Character/VersusCharacter";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../lib/utils/colors";
import { connect } from "react-redux";
import { getCharacters, getUser } from "../lib/state/selectors";
import { useSelectCharacterContext } from "../lib/context/selectCharacterContext";

const ImproveScreen = ({ user, characters }) => {
  const { userCharacter, opponentCharacter, setOpponentCharacter } =
    useSelectCharacterContext();

  useEffect(() => {
    if (!opponentCharacter) setOpponentCharacter(characters[0]);
  }, []);

  if (!userCharacter && !opponentCharacter) {
    return <ActivityIndicator size="large" />;
  } else {
    return (
      <LinearGradient
        style={styles.container}
        colors={[Colors.DARKER_RED, Colors.DARKER_BLUE, Colors.LIGHTER_BLUE]}
        testID="improve-screen"
      >
        <View style={styles.user}>
          <UserInfo user={user} />
        </View>
        <View>
          <VersusCharacter
            character={userCharacter}
            opponent={opponentCharacter}
          />
        </View>
        <View style={styles.opponent}>
          <OpponentNote />
        </View>
      </LinearGradient>
    );
  }
};

export default connect((state) => ({
  user: getUser(state),
  characters: getCharacters(state),
}))(ImproveScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
