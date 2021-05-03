import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "../Input/Input";
import { useForm } from "../../lib/hooks/useForm";
import { PREFIX } from "../../lib/utils/helper/contants";
import Button from "../Button/Button";
import { Colors } from "../../lib/utils/colors";

const { width } = Dimensions.get("window");

const defaultValues = {
  username: "",
  password: "",
};

const EyePassword = ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Ionicons style={styles.eye} name={`${PREFIX}-eye`} />
    </TouchableNativeFeedback>
  );
};

const SigninForm = () => {
  const {
    formValues,
    handleChange,
    register,
    validate,
    isValid,
    secure,
    setSecure,
  } = useForm();

  const showPassword = () => {
    setSecure(!secure);
  };

  const onSubmit = (data) => {};

  useEffect(() => register(defaultValues), []);

  useEffect(() => validate(formValues), [formValues]);

  return (
    <View testID="signin-form" style={styles.container}>
      <View>
        <Text style={styles.label}>Pseudo:</Text>
        <Input
          testID="username"
          onChangeText={() => handleChange("username")}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Mot de passe:</Text>
        <Input
          testID="password"
          secureTextEntry={secure}
          onChangeText={() => handleChange("password")}
          style={styles.input}
          se
        />
        <EyePassword onPress={showPassword} />
      </View>
      <Button
        testID="submit"
        label="Valider"
        onPress={onSubmit}
        firstColor={Colors.DARKER_RED}
        secondColor={Colors.DARKER_RED}
        style={[styles.button, !isValid && styles.disabledButton]}
        disabled={!isValid}
      />
    </View>
  );
};

export default SigninForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: Colors.WHITE,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.WHITE,
    borderRadius: 10,
    width: width - 80,
    height: 37,
    color: Colors.WHITE,
  },
  button: {
    width: width - 80,
    borderRadius: 10,
  },
  disabledButton: {
    opacity: 0.3,
  },
  error: {
    color: "red",
  },
  eye: {
    position: "absolute",
    fontSize: 24,
    top: 35,
    right: 10,
  },
});
