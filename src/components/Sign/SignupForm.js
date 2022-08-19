import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";
import { countries } from "../../lib/utils/country/countriesList";
import { Colors } from "../../lib/utils/colors";

import { useForm } from "../../lib/hooks/useForm";
import { Input, DateInput, PickerInput } from "../Input/Input";
import Button from "../Button/Button";
import { connect } from "react-redux";
import { signUp } from "../../lib/state/actions";
import { Status } from "../../lib/utils/types/status";

const EyePassword = ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Ionicons style={styles.eye} name={`${PREFIX}-eye`} />
    </TouchableNativeFeedback>
  );
};

const Error = ({ isVisible, label }) => {
  return isVisible && <Text>{label}</Text>;
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

const SignupForm = ({ status, signUp, error }) => {
  const {
    formValues,
    secure,
    setSecure,
    isValid,
    passwordIsValid,
    emailIsValid,
    validate,
    handleChange,
    register,
  } = useForm(defaultValues);

  const showPassword = () => {
    setSecure(!secure);
  };

  const onSubmit = () => {
    const data = {
      ...formValues,
      email: formValues.email.toLowerCase(),
    };
    signUp(data);
  };

  useEffect(() => register(defaultValues), []);

  useEffect(() => validate(formValues), [formValues]);

  return (
    <View testID="signup-form" style={styles.container}>
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
        <Error
          label="L'adresse email n'est pas valide."
          isVisible={formValues.email?.length > 0 && emailIsValid}
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
        loading={status === Status.LOADING}
      />
      <Error label={error} isVisible={!!error} />
    </View>
  );
};

export default connect(
  (state) => {
    return {
      error: state.user.error,
      status: state.user.status,
    };
  },
  {
    signUp,
  }
)(SignupForm);

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
});
