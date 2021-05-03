import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../lib/utils/colors";
import Constants from "expo-constants";
import SigninForm from "../components/Sign/SigninForm";
import GoogleAuthForm from "../components/Sign/GoogleAuthForm";
import Error from "../components/Error/Error";

const BackButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.back} onPress={onPress}>
      <Text style={styles.backText}>{label}</Text>
    </TouchableOpacity>
  );
};

const SigninScreen = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <LinearGradient colors={[Colors.LIGHTER_BLUE, Colors.DARKER_BLUE]}>
      <View testID="signin-screen" style={styles.container}>
        <BackButton label="Retour" onPress={goBack} />
        <Text testID="signin-screen-title" style={styles.title}>
          Connexion
        </Text>
        <SigninForm />
        <GoogleAuthForm />
        {/* <Error /> */}
      </View>
    </LinearGradient>
  );
};

export default SigninScreen;

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
    fontWeight: "600",
    lineHeight: 50,
    textAlign: "center",
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
