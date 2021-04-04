import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SigninForm from "../components/Sign/SigninForm";
import GoogleAuthForm from "../components/Sign/GoogleAuthForm";
import Error from "../components/Error/Error";

const SigninScreen = () => {
  const { container, titleStyle } = styles;

  return (
    <View style={container}>
      <Text style={titleStyle}>Connexion</Text>
      <SigninForm />
      <GoogleAuthForm />
      <Error />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 50,
    textAlign: "center",
  },
});
