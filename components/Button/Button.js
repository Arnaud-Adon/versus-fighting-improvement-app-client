import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";

const Button = ({
  onPress,
  label,
  firstColor,
  secondColor,
  style,
  disabled,
  loading,
  ...others
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        testID="button"
        colors={[firstColor, secondColor]}
        style={[styles.container, style]}
        {...others}
      >
        {!!loading ? (
          <ActivityIndicator testID="loading" size="large" />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    height: 50,
  },
  label: {
    textAlign: "center",
    color: "#fff",
  },
});

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  firstColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string.isRequired,
};

export default Button;
