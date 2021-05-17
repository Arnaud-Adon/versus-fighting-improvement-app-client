import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Character from "./Character";
import PropTypes from "prop-types";

const UserCharacter = () => {
  return <View testID="user-character" style={styles.container}></View>;
};

export default UserCharacter;

const styles = StyleSheet.create({
  container: {},
});
