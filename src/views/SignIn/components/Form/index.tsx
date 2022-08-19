import React, { ReactElement, useEffect } from 'react';
import { View, Text, TouchableNativeFeedback, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '../Input/Input';
import { useForm } from '../../lib/hooks/useForm';
import Button from '../Button/Button';
import { COLORS, PLATFORM } from '../../../../constants';

import {
  container,
  button,
  disabled,
  error,
  eye,
  input,
  label,
  width,
} from './index.styles';

const defaultValues = {
  email: '',
  password: '',
};

const EyePassword = ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Ionicons style={eye} name={`${PLATFORM}-eye`} />
    </TouchableNativeFeedback>
  );
};

const Error = ({ isVisible, label }) => {
  return isVisible && <Text style={error}>{label}</Text>;
};

const Form = (): ReactElement => {
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

  //   const onSubmit = () => {
  //     signIn(formValues);
  //   };

  useEffect(() => register(defaultValues), []);

  useEffect(() => validate(formValues), [formValues]);

  return (
    <View testID="signin-form" style={container}>
      <View>
        <Text style={label}>Email:</Text>
        <Input
          testID="email"
          onChangeText={() => handleChange('email')}
          style={input}
        />
      </View>
      <View>
        <Text style={label}>Mot de passe:</Text>
        <Input
          testID="password"
          secureTextEntry={secure}
          onChangeText={() => handleChange('password')}
          style={input}
        />
        <EyePassword onPress={showPassword} />
      </View>
      <Button
        testID="submit"
        label="Valider"
        onPress={onSubmit}
        firstColor={COLORS.DARKER_RED}
        secondColor={COLORS.DARKER_RED}
        style={[button, !isValid && disabled]}
        disabled={!isValid}
        loading={status === Status.LOADING}
      />
      <Error isVisible={!!error} label={error} />
    </View>
  );
};

export default Form;
