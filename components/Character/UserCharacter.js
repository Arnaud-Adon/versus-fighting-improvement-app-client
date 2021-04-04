import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Character from "./Character";
import PropTypes from "prop-types";

const UserCharacter = ({ name, info }) => {
  const { container, matchContainer } = styles;

  return (
    <View style={container}>
      <Character name={name} />
      <View style={matchContainer}>
        <Text>Nombre de match: {info.fightNumber}</Text>
        <Text>Nombre de match du dernier jour: {info.lastFightNumber}</Text>
      </View>
    </View>
  );
};

UserCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
};

export default UserCharacter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  matchContainer: {
    height: 80,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
