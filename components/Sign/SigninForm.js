import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { PREFIX } from "../../lib/utils/helper/contants";
import { signinUser } from "../../lib/state/actions";

const { width } = Dimensions.get("window");

const SigninForm = (props) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const { container, inputStyle, buttonStyle, errorInput, eyeStyle } = styles;
  const { signinUser } = props;
  const [secure, setSecure] = useState(true);

  const showPassword = () => {
    setSecure(!secure);
  };

  const onSubmit = (data) => {
    dispatch(signinUser(data));
  };

  return (
    <View style={container}>
      <Text>Pseudo:</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.username && (
        <Text style={errorInput}>Votre pseudo est requis.</Text>
      )}
      <Text>Mot de passe:</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <View>
            <TextInput
              style={inputStyle}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={secure}
              value={value}
            />
            <TouchableNativeFeedback onPress={showPassword}>
              <Ionicons style={eyeStyle} name={`${PREFIX}-eye`} />
            </TouchableNativeFeedback>
          </View>
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.password && (
        <Text style={errorInput}>Votre mot de passe est requis.</Text>
      )}

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={buttonStyle}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninForm;

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    width: width - 80,
    height: 37,
    borderWidth: 1,
  },
  buttonStyle: {
    marginVertical: 20,
    width: width - 80,
    height: 37,
    backgroundColor: "blue",
    textAlign: "center",
    lineHeight: 30,
    color: "#fff",
  },
  errorInput: {
    color: "red",
  },
  eyeStyle: {
    position: "absolute",
    top: 15,
    right: 20,
    fontSize: 26,
    color: "black",
  },
});
