import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const {
    container,
    blocTitle,
    textTitle,
    buttonStyle,
    colorButtonBlue,
    colorButtonRed,
  } = styles;

  return (
    <View style={container}>
      <View style={blocTitle}>
        <Text style={textTitle}>Bienvenue sur Improve Versus Fighting</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={[buttonStyle, colorButtonBlue]}>S'incrire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text style={[buttonStyle, colorButtonRed]}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  blocTitle: {
    width: width - 80,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 50,
  },
  buttonStyle: {
    margin: 15,
    width: width - 80,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
    borderWidth: 1,
    color: "#fff",
  },
  colorButtonRed: {
    backgroundColor: "red",
  },
  colorButtonBlue: {
    backgroundColor: "blue",
  },
});
