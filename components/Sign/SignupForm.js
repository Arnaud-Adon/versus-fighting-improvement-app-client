import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { Picker, PickerIOS } from "@react-native-community/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { countries } from "../../lib/utils/country/countriesList";
import { register } from "../../lib/state/actions";
import { PREFIX } from "../../lib/utils/helper/contants";
import { useEffect, useState } from "react/cjs/react.development";
import { useForm } from "../../lib/hooks/useForm";

const { width } = Dimensions.get("window");

const defaultValues = {
  pseudo: "",
  email: "",
  birthdayDate: new Date(),
  country: countries[0].name,
  password: "",
  comfirmPassword: "",
};

const SignupForm = () => {
  const {
    container,
    title,
    buttonStyle,
    inputStyle,
    birthday_container,
    dateStyle,
    countryStyle,
    errorInput,
    eyeStyle,
  } = styles;

  const dispatch = useDispatch();
  const {
    formValues,
    errors,
    secure,
    setSecure,
    isValid,
    handleChange,
    validate,
  } = useForm(defaultValues);

  const showPassword = () => {
    setSecure(!secure);
  };

  const onSubmit = () => {
    // dispatch(register());
  };

  useEffect(() => {
    // console.log("validate");
    validate();
  }, [formValues]);

  //   useEffect(() => {
  //     //   validate(defaultValues);
  //   }, []);

  // console.log("errors", errors);
  // console.log("formValues", formValues);
  // console.log("isValid", isValid);

  return (
    <ScrollView>
      <View style={container}>
        <Text style={title}>Inscription</Text>
        <View>
          <Text>Pseudo:</Text>
          <TextInput
            style={inputStyle}
            onChangeText={(value) => handleChange("pseudo", value)}
            testID="pseudo-input"
          />

          {errors.username && (
            <Text style={errorInput} testID="error">
              Votre pseudo est requis.
            </Text>
          )}
        </View>

        <View>
          <Text>email:</Text>

          <TextInput
            style={inputStyle}
            onChangeText={(value) => handleChange("email", value)}
            testID="email-input"
          />
          {errors.email && (
            <Text style={errorInput} testID="error">
              Votre email est requis.
            </Text>
          )}
        </View>

        <View style={birthday_container}>
          <Text>Date de naissance:</Text>
          <DateTimePicker
            style={dateStyle}
            testID="dateTimePicker"
            mode={"date"}
            is24Hour={true}
            display="clock"
            onChange={(event, value) => handleChange("birthdayDate", value)}
            value={formValues.birthdayDate ?? defaultValues.birthdayDate}
            testID="birthday-input"
          />
        </View>

        <View style={countryStyle}>
          <Text>Votre pays:</Text>
          {PREFIX === "ios" ? (
            <PickerIOS
              selectedValue={formValues.country ?? defaultValues.country}
              style={{ height: 200, width: 100, color: "#000" }}
              onValueChange={(itemValue, itemIndex) =>
                handleChange("country", itemValue)
              }
              mode={"dialog"}
              testID="country-input"
            >
              {countries.length > 0 &&
                countries.map((country, index) => {
                  const { name } = country;
                  return (
                    <PickerIOS.Item key={index} label={name} value={name} />
                  );
                })}
            </PickerIOS>
          ) : (
            <Picker
              selectedValue={formValues.country ?? defaultValues.country}
              style={{ height: 200, width: 100, color: "#000" }}
              onValueChange={(itemValue, itemIndex) =>
                handleChange("country", itemValue)
              }
              mode={"dialog"}
              testID="country-input"
            >
              {countries.length > 0 &&
                countries.map((country, index) => {
                  const { name } = country;
                  return (
                    <PickerIOS.Item key={index} label={name} value={name} />
                  );
                })}
            </Picker>
          )}
        </View>

        <View>
          <Text>Mot de passe:</Text>
          <View>
            <TextInput
              style={inputStyle}
              onChangeText={(value) => handleChange("password", value)}
              secureTextEntry={secure}
              testID="password-input"
            />
            <TouchableNativeFeedback onPress={showPassword}>
              <Ionicons style={eyeStyle} name={`${PREFIX}-eye`} />
            </TouchableNativeFeedback>
          </View>
          {errors.password && (
            <Text style={errorInput} testID="error">
              Veuillez choisir un mot de passe.
            </Text>
          )}
        </View>

        <View>
          <Text>Confirmation mot de passe:</Text>
          <View>
            <TextInput
              style={inputStyle}
              onChangeText={(value) => handleChange("comfirmPassword", value)}
              secureTextEntry={secure}
              testID="confirmPassword-input"
            />
            <TouchableNativeFeedback onPress={showPassword}>
              <Ionicons style={eyeStyle} name={`${PREFIX}-eye`} />
            </TouchableNativeFeedback>
          </View>
          {errors.confirmPassword && (
            <Text style={errorInput} testID="error">
              Veuillez choisir un mot de passe.
            </Text>
          )}
        </View>

        <TouchableOpacity>
          <Text style={buttonStyle} onPress={onSubmit} testID="submit-button">
            Valider
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 30,
  },
  inputStyle: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: width - 80,
    height: 37,
  },
  buttonStyle: {
    margin: 15,
    backgroundColor: "blue",
    width: width - 80,
    height: 30,
    textAlign: "center",
    lineHeight: 30,
    color: "#fff",
  },
  birthday_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateStyle: {
    margin: 10,
    width: 130,
    height: 70,
  },
  countryStyle: {
    width: width - 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  errorInput: {
    color: "red",
  },
  eyeStyle: {
    position: "absolute",
    fontSize: 24,
    top: 15,
    right: 10,
  },
});
