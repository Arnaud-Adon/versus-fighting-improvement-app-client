import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../lib/utils/colors";

const GoogleAuthForm = (props) => {
  return (
    <View>
      <Text style={styles.title}>Google Authentification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Colors.WHITE,
  },
});

export default GoogleAuthForm;
