import React, { ReactElement } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './index.styles';

interface Props {
  onPress: () => void;
  label: string;
  firstColor: string;
  secondColor: string;
  style?: ViewStyle;
  disabled?: boolean;
  isLoading?: boolean;
  [x: string]: any;
}

const Button = ({
  onPress,
  label,
  firstColor,
  secondColor,
  style,
  disabled,
  isLoading,
  ...rest
}: Props): ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        testID="button"
        colors={[firstColor, secondColor]}
        style={[styles.container, style]}
        {...rest}
      >
        {isLoading ? (
          <ActivityIndicator testID="loading" size="large" />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
