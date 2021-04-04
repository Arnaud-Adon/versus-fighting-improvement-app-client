import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SignupForm from "../components/Sign/SignupForm";

const SignupScreen = ({ navigation }) => {
  const { isLogged } = useSelector((state) => state.authentification);

  useEffect(() => {
    if (isLogged) {
      navigation.navigate("SelectCharacter");
    }
  });

  return <SignupForm />;
};

export default SignupScreen;
