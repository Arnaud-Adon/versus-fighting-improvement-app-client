import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SignupForm from "../components/Sign/SignupForm";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const navigation = useNavigation();
  return <SignupForm />;
};

export default SignupScreen;
