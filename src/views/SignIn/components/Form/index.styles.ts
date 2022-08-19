import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

const width = Dimensions.get('window');

const { container, label, input, button, disabled, error, eye } =
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: COLORS.WHITE,
    },
    input: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 18,
      borderWidth: 1,
      borderColor: COLORS.WHITE,
      borderRadius: 10,
      width: width - 80,
      height: 37,
      color: COLORS.WHITE,
    },
    button: {
      width: width - 80,
      borderRadius: 10,
    },
    disabled: {
      opacity: 0.3,
    },
    error: {
      marginBottom: 10,
      color: COLORS.RED,
    },
    eye: {
      position: 'absolute',
      fontSize: 24,
      top: 35,
      right: 10,
    },
  });

export { container, label, input, button, disabled, error, eye, width };
