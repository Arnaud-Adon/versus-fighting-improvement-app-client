import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../lib/utils/colors";
import Constants from "expo-constants";
import SignupForm from "../components/Sign/SignupForm";

const BackButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.back} onPress={onPress}>
      <Text style={styles.backText}>{label}</Text>
    </TouchableOpacity>
  );
};

const SignupScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient colors={[Colors.LIGHTER_RED, Colors.DARKER_RED]}>
      <View testID="signup-screen" style={styles.container}>
        <BackButton label="Retour" onPress={goBack} />
        <Text testID="signup-screen-title" style={styles.title}>
          Inscription
        </Text>
        <SignupForm />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 30,
    color: Colors.WHITE,
  },
  back: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  backText: {
    fontSize: 20,
    color: Colors.WHITE,
  },
});

export default SignupScreen;
