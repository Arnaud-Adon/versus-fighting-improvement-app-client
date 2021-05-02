import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";
import { countries } from "../../lib/utils/country/countriesList";
import { Colors } from "../../lib/utils/colors";

import { register } from "../../lib/state/actions";
import { useDispatch } from "react-redux";
import { useForm } from "../../lib/hooks/useForm";
import { useNavigation } from "@react-navigation/native";
import { Input, DateInput, PickerInput } from "../Input/Input";
import Button from "../Button/Button";

const BackButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.back} onPress={onPress}>
      <Text style={styles.backText}>{label}</Text>
    </TouchableOpacity>
  );
};

const EyePassword = ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress} di>
      <Ionicons style={styles.eye} name={`${PREFIX}-eye`} />
    </TouchableNativeFeedback>
  );
};

const Error = ({ isVisible, label }) => {
  return isVisible && <Text style={styles.error}>{label}</Text>;
};

const { width } = Dimensions.get("window");

const defaultValues = {
  username: "",
  email: "",
  birthdayDate: new Date(),
  country: countries[0].name,
  password: "",
  confirmPassword: "",
};

const SignupForm = () => {
  const {
    formValues,
    errors,
    secure,
    setSecure,
    isValid,
    passwordIsValid,
    validate,
    handleChange,
    register,
  } = useForm(defaultValues);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const showPassword = () => {
    setSecure(!secure);
  };

  const onSubmit = () => {};

  useEffect(() => {
    register(defaultValues);
  }, []);

  useEffect(() => {
    validate(formValues);
  }, [formValues]);

  return (
    <LinearGradient colors={[Colors.LIGHTER_RED, Colors.DARKER_RED]}>
      <View testID="signup-form" style={styles.container}>
        <BackButton label="Retour" onPress={goBack} />
        <Text style={styles.title}>Inscription</Text>
        <View>
          <Text style={styles.label}>Pseudo:</Text>
          <Input
            testID="username"
            style={styles.input}
            onChangeText={() => handleChange("username")}
          />
        </View>
        <View>
          <Text style={styles.label}>email:</Text>
          <Input
            testID="email"
            style={styles.input}
            onChangeText={() => handleChange("email")}
          />
        </View>
        <View style={styles.birthdayContainer}>
          <Text style={styles.label}>Date de naissance:</Text>
          <DateInput
            testID="birthday"
            style={styles.date}
            onChange={() => handleChange("birthdayDate")}
            value={formValues.birthdayDate ?? defaultValues.birthdayDate}
          />
        </View>
        <View style={styles.country}>
          <Text style={styles.label}>Votre pays:</Text>
          <PickerInput
            testID="country"
            device={PREFIX}
            countries={countries}
            selectedValue={formValues.country ?? defaultValues.country}
            style={styles.picker}
            onChange={() => handleChange("country")}
          />
        </View>
        <View>
          <Text style={styles.label}>Mot de passe:</Text>
          <View>
            <Input
              testID="password"
              secureTextEntry={secure}
              style={styles.input}
              onChangeText={() => handleChange("password")}
            />
            <EyePassword onPress={showPassword} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Confirmation mot de passe:</Text>
          <View>
            <Input
              testID="confirmPassword"
              secureTextEntry={secure}
              style={styles.input}
              onChangeText={() => handleChange("confirmPassword")}
            />
            <EyePassword onPress={showPassword} />
          </View>
          <Error
            isVisible={passwordIsValid}
            label="les mots de passe ne sont pas identiques"
          />
        </View>
        <Button
          testID="submit"
          onPress={onSubmit}
          label="Confirmer"
          firstColor={Colors.LIGHTER_BLUE}
          secondColor={Colors.LIGHTER_BLUE}
          style={[styles.button, !isValid && styles.disabledButton]}
          disabled={!isValid}
        />
      </View>
    </LinearGradient>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Constants.statusBarHeight,
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
  birthdayContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    margin: 10,
    width: 130,
    height: 70,
  },
  picker: {
    height: 180,
    width: 100,
    color: Colors.BLACK,
  },
  country: {
    width: width - 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  eye: {
    position: "absolute",
    fontSize: 24,
    top: 15,
    right: 10,
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
